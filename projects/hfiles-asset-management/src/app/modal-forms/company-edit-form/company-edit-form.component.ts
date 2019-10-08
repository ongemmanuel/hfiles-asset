import { Component, ViewChild, ChangeDetectorRef, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { AdditionalConfig } from '../../shared/additional.config';
import { CompanyService } from '../../company/company.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog } from '@angular/material';
import { NotifyDialogComponent } from '../../shared/notify-dialog/notify-dialog.component';
import { CustomValidatorService } from '../../shared/custom-validator.service';
import { ConfigService } from '../../shared/config.service';
import { delay } from 'rxjs/operators';

export interface PerKeys {
  benefit_type: string[];
  compensation_type: string[];
  deduction_type: string[];
}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'company-edit-form',
  templateUrl: './company-edit-form.component.html',
  styleUrls: ['./company-edit-form.component.css']
})

export class CompanyEditFormComponent {
  @Output() successEdit = new EventEmitter<boolean>();

  config: AdditionalConfig = AdditionalConfig.COMPANY_EDIT_CONFIG;
  compEditGroup: FormGroup;
  openForm = false;
  isEditActive = false;
  formTitle = '';
  currentData;
  userRole;

  payrollFreqDropdown = [];
  payrollPeriod = [];
  benefitType = [];
  compensationType = [];
  deductionType = [];

  totalPerKeys: PerKeys = {
    benefit_type: [],
    compensation_type: [],
    deduction_type: [],
  };

  editDataVal;
  selectedArrs: string[];


  constructor(
    private customValidator: CustomValidatorService,
    private configService: ConfigService,
    private cdr: ChangeDetectorRef,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private companyService: CompanyService,
    private spinner: NgxSpinnerService) { }

  populateForm(data, fromCancel, role) {
    this.userRole = role;
    this.openForm = false;
    this.payrollFreqDropdown = [];
    this.payrollPeriod = [];
    this.spinner.show('homeSpinner');
    this.formTitle = data.company_name;
    this.isEditActive = false;
    this.compEditGroup = this.fb.group({});
    this.createFormFromConfig(this.config, data, fromCancel);
    this.currentData = data;
    console.log(this.currentData);
  }

  createFormFromConfig(config, data, fromCancel) {
    config.forEach(entry => {
      const valKey = data[entry.key];
      if (entry.type === 'text' || entry.type === '') {
        // this.compEditGroup.addControl(entry.key, new FormControl(data[entry.key]));
        if (entry.isRequired) {
          // tslint:disable-next-line: max-line-length
          this.compEditGroup.addControl(entry.key, new FormControl(valKey.toString(), this.getValidators(entry.key)));
        } else {
          this.compEditGroup.addControl(entry.key, new FormControl(valKey));
        }
      } else if (entry.type === 'selectize') {
        console.log(data[entry.key]);
        // this.compEditGroup.addControl(entry.key, this.createFormArray(data[entry.key]));
        this.compEditGroup.addControl(entry.key, this.createFormArrayReq(entry, valKey));
      }
    });
    this.getPayrollEditDetails(data, fromCancel);
  }

  createFormArray(arrData) {
    console.log(arrData);
    const formArr = new FormArray([]);
    if (arrData !== null && arrData !== []) {
      arrData.forEach(formCtrl => {
        // console.log(formCtrl);
        formArr.push(this.fb.control(formCtrl));
      });
    } else {
      formArr.push(this.fb.control(''));
    }
    return formArr;
  }

  createFormArrayReq(entry, arrData) {
    console.log(arrData);
    const formArr = new FormArray([]);
    if (entry.isRequired) {
      if (arrData !== null && arrData !== []) {
        arrData.forEach(formCtrl => {
          // console.log(formCtrl);
          formArr.push(this.fb.control(formCtrl, this.getValidators(entry.key)));
        });
      } else {
        formArr.push(this.fb.control('', this.getValidators(entry.key)));
      }
    } else {
      if (arrData !== null && arrData !== []) {
        arrData.forEach(formCtrl => {
          // console.log(formCtrl);
          formArr.push(this.fb.control(formCtrl));
        });
      } else {
        formArr.push(this.fb.control(''));
      }
    }
    return formArr;
  }

  ZZZcreateFormArrayReq(entry, valkey) {
    const formArr = new FormArray([]);
    if (entry.isRequired) {
      formArr.push(this.fb.control('', this.getValidators(entry.key)));
    } else {
      formArr.push(this.fb.control(''));
    }
    return formArr;
  }

  getValidators(key) {
    if (key === 'working_days_of_the_month' || key === 'probationary_period') {
      return [Validators.required, this.customValidator.noWhiteSpaceValidator,
      Validators.pattern(/^(\d*\.)?\d+$/), this.customValidator.greaterThanZero];
    } else {
      return [Validators.required, this.customValidator.noWhiteSpaceValidator];
    }
  }

  getErrorMessage(key) {
    return this.customValidator.mapErrorMsg(key.errors);
  }

  getPayrollEditDetails(data, fromCancel) {
    if (!fromCancel) {
      this.companyService.getCompanyEdit(data.company_id).subscribe(
        resp => {
          this.editDataVal = resp.body;
          this.createPayroll(data, this.editDataVal);
        },
        error => {
          this.spinner.hide('homeSpinner');
        }
      );
    } else {
      this.createPayroll(data, this.editDataVal);
    }

  }

  createPayroll(data, editData) {
    console.log(editData.parameters);
    if (Object.entries(editData.parameters).length !== 0) {
      this.payrollFreqDropdown = editData.parameters.payroll_frequency;
      this.totalPerKeys.benefit_type = editData.parameters.benefit_type;
      this.totalPerKeys.deduction_type = editData.parameters.deduction_type;
      this.totalPerKeys.compensation_type = editData.parameters.compensation_type;
      this.payrollPeriod = data.payroll_periods;
      this.compEditGroup.addControl('payroll_frequency', new FormControl(data.payroll_frequency));
      this.compEditGroup.addControl('payroll_periods', this.createFormArrayOfGroup(data));
      this.compEditGroup.disable();
      this.spinner.hide('homeSpinner');
      this.openForm = true;
    } else {
      this.compEditGroup.disable();
      this.spinner.hide('homeSpinner');
      this.openForm = false;
      const msg = 'No available parameters found. Please add or upload parameters first.';
      this.openDialog(msg);
    }

  }

  createFormArrayOfGroup(data) {
    const formArrGroup = new FormArray([]);
    console.log(data.payroll_periods);
    if (data.payroll_periods !== '' && data.payroll_periods !== null && data.payroll_periods !== []) {
      data.payroll_periods.forEach(fg => {
        const parsedData = JSON.parse(fg);
        formArrGroup.push(this.fb.group({
          period_id: parsedData.period_id,
          period_name: parsedData.period_name,
          period_keys: this.createFormArray(parsedData.period_keys)
        }));
      });
    } else {
      // formArrGroup.push(this.fb.group({
      //   period_id: ['', Validators.required],
      //   period_name: ['', Validators.required],
      //   period_keys: this.createFormArray([])
      // }));
    }
    // console.log(this.compEditGroup);
    // this.compEditGroup.disable();
    // this.spinner.hide('homeSpinner');
    // this.openForm = true;
    return formArrGroup;
  }

  checkThis(control) {
    console.log(control);
  }

  enableFormEdit() {
    this.isEditActive = true;
    this.compEditGroup.enable();
    console.log(this.compEditGroup);
  }

  cancelEdit() {
    this.openForm = false;
    this.isEditActive = false;
    this.compEditGroup.disable();
    // from cancel = true
    this.populateForm(this.currentData, true, this.userRole);
  }

  removeElem(formArrayName, index) {
    this.compEditGroup.markAsDirty();
    (this.compEditGroup.get(formArrayName) as FormArray).removeAt(index);
  }

  addElem(ctrl) {
    this.compEditGroup.markAsDirty();
    console.log(ctrl);
    if (ctrl.isRequired) {
      (this.compEditGroup.get(ctrl.key) as FormArray).push(
        this.fb.control('', this.getValidators(ctrl.key))
      );
    } else {
      (this.compEditGroup.get(ctrl.key) as FormArray).push(
        this.fb.control('', [])
      );
    }
  }

  addPayrollPeriod(formArrayName) {
    this.compEditGroup.markAsDirty();
    return (this.compEditGroup.get(formArrayName) as FormArray).push(
      this.fb.group({
        period_id: [''],
        period_name: [''],
        period_keys: this.createFormArray([])
      })
    );
  }

  labelChangePerKeys(key) {
    if (key === 'benefit_type') {
      return 'BENEFITS';
    } else if (key === 'deduction_type') {
      return 'DEDUCTIONS';
    } else if (key === 'compensation_type') {
      return 'COMPENSATIONS';
    }
  }

  isSelected(indexNum, valCheckBox) {
    this.selectedArrs = this.getPeriodKeys(indexNum);
    return (this.selectedArrs.includes(valCheckBox));
  }

  getPeriodKeys(index) {
    return this.compEditGroup.controls.payroll_periods.value[index].period_keys;
  }

  openDialog(message): void {
    const dialogRef = this.dialog.open(NotifyDialogComponent, {
      data: message
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Yes clicked');
        // DO SOMETHING
      }
    });
  }

  checkValidity() {
    this.compEditGroup.valueChanges.subscribe(() => {
      this.cdr.detectChanges();
    });
    // return this.compEditGroup.invalid;
    return this.compEditGroup.valid;
  }

  saveEdit(value) {
    this.spinner.show('saveSpinner');
    const payper = value.payroll_periods;
    const stringPayper = [];

    if (payper.length !== 0) {
      payper.forEach(per => {
        stringPayper.push(JSON.stringify(per));
      });
    }
    value.payroll_periods = stringPayper;

    if (this.compEditGroup.valid) {
      this.companyService.addCompany(this.userRole, value).subscribe(resp => {
        this.compEditGroup.disable();
        this.isEditActive = false;
        this.successEdit.emit(true);
        this.spinner.hide('saveSpinner');
        // value.payroll_periods = payper;
        // this.currentData = value;
        // value.payroll_periods = payper;
        // console.log(value.payroll_periods);
        // console.log(payper);
        this.currentData = value;
        // console.log(value);
        // console.log(this.currentData);
      }, error => {
          console.log(error);
          this.spinner.hide('saveSpinner');
      });
    }
  }


  isAllowedByRole(permissionKey) {
    return this.configService.getRoleDataAdmin().includes(permissionKey);
  }


}
