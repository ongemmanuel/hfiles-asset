import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, AfterContentChecked } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray, AbstractControl, ValidatorFn } from '@angular/forms';
import { AdditionalConfig } from '../../shared/additional.config';
import { CompanyService } from '../../company/company.service';
import { AngularButtonLoaderService } from 'angular-button-loader';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog, MatDialogRef } from '@angular/material';
import { NotifyDialogComponent } from '../../shared/notify-dialog/notify-dialog.component';
import { CustomValidatorService } from '../../shared/custom-validator.service';
import { ConfigService } from '../../shared/config.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-company-form',
  templateUrl: './add-company-form.component.html',
  styleUrls: ['./add-company-form.component.css']
})

export class AddCompanyFormComponent implements OnInit {
  config: AdditionalConfig = AdditionalConfig.COMPANY_EDIT_CONFIG;
  compAddFormGroup: FormGroup;
  isReady = false;
  idValid = false;
  isValidating = false;
  validateBtnTxt = 'Validate';
  msgForExisting: string;

  constructor(
    private dialogRef: MatDialogRef<AddCompanyFormComponent>,
    private fb: FormBuilder,
    private compService: CompanyService,
    private buttonLoaderService: AngularButtonLoaderService,
    private customValidator: CustomValidatorService,
    private configService: ConfigService,
    private spinner: NgxSpinnerService,
    private cdr: ChangeDetectorRef,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    console.log(this.config);
    this.createFormFromConfig(this.config);
    console.log(this.compAddFormGroup);
    console.log(this.compAddFormGroup.controls['company_name']);
    this.isReady = true;
  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngAfterContentChecked(): void {
    this.cdr.detectChanges();
  }

  createFormFromConfig(config) {
    this.compAddFormGroup = this.fb.group({});
    config.forEach(entry => {
      // console.log(entry);
      if (entry.type === 'text' || entry.type === '') {
        if (entry.isRequired) {
          // tslint:disable-next-line: max-line-length
          this.compAddFormGroup.addControl(entry.key, new FormControl('', this.getValidators(entry.key)));
        } else {
          this.compAddFormGroup.addControl(entry.key, new FormControl());
        }
      } else if (entry.type === 'selectize') {
        if (entry.isRequired) {
          this.compAddFormGroup.addControl(entry.key, this.createFormArray(entry));
        } else {
          this.compAddFormGroup.addControl(entry.key, this.createFormArray(entry));
        }
      }
    });
  }

  getValidators(key) {
    if (key === 'working_days_of_the_month' || key === 'probationary_period') {
      return [Validators.required, this.customValidator.noWhiteSpaceValidator,
      Validators.pattern(/^(\d*\.)?\d+$/), this.customValidator.greaterThanZero];
    } else {
      return [Validators.required, this.customValidator.noWhiteSpaceValidator];
    }
  }

  createFormArray(entry) {
    const formArr = new FormArray([]);
    if (entry.isRequired) {
      formArr.push(this.fb.control('', this.getValidators(entry.key)));
    } else {
      formArr.push(this.fb.control(''));
    }
    return formArr;
  }

  getErrorMessage(key) {
    return this.customValidator.mapErrorMsg(key.errors);
  }

  removeElem(formArrayName, index) {
    (this.compAddFormGroup.get(formArrayName) as FormArray).removeAt(index);
  }

  addElem(elem) {
    console.log(elem);
    this.formValidityChange();
    if (elem.isRequired) {
      this.selectedArray(elem.key).push(this.fb.control('', this.getValidators(elem.key)));
    } else {
      this.selectedArray(elem.key).push(this.fb.control(''));
    }
  }

  closeAdd() {
    this.dialogRef.close();
  }

  selectedArray(selectedArray) {
    return this.compAddFormGroup.get(selectedArray) as FormArray;
  }

  checkIdValidity() {
    this.validateBtnTxt = '';
    this.buttonLoaderService.displayLoader();
    const fc = this.compAddFormGroup.get('company_id') as FormControl;
    fc.disable();
    this.compService.checkId(fc.value.trim()).subscribe(resp => {
      if (resp.statusText === 'OK') {
        console.log(resp.body);
        if (resp.body) {
          console.log('ID ALREADY EXIST');
          this.compAddFormGroup.controls['company_id'].setValidators(
            [Validators.required, this.customValidator.noWhiteSpaceValidator, this.customValidator.checkIfAvailableValidator(false)]
          );
          fc.updateValueAndValidity();
          this.idValid = false;
          this.msgForExisting = fc.value + ' already exist';
          this.validateBtnTxt = 'Validate';
          this.buttonLoaderService.hideLoader();
          fc.enable();
        } else {
          this.idValid = true;
          this.validateBtnTxt = 'Valid';
          this.buttonLoaderService.hideLoader();
          fc.enable();
        }
      }
    },
      error => {
        this.buttonLoaderService.hideLoader();
        this.validateBtnTxt = 'Validate';
        fc.enable();
      });
  }

  onValChange(e) {
    this.compAddFormGroup.controls['company_id'].setValidators(
      [Validators.required, this.customValidator.noWhiteSpaceValidator]
    );
    this.idValid = false;
    this.validateBtnTxt = 'Validate';

  }

  formValidityChange() {
    this.compAddFormGroup.valueChanges.subscribe(() => {
      this.cdr.detectChanges();
    });
    return this.compAddFormGroup.invalid;
  }

  onSubmit(formValue) {
    this.spinner.show('savingSpinner');
    console.log(formValue);
    console.log(this.compAddFormGroup);

    if (this.idValid) {
      this.compService.addCompany(this.configService.getRole(), formValue).subscribe(resp => {
        resp['name'] = formValue.company_name;
        this.dialogRef.close(resp);
        this.spinner.hide('savingSpinner');
      }, error => {
        this.spinner.hide('savingSpinner');
        this.openDialogNotify(error.statusText);
      });
    }

  }

  openDialogNotify(message): void {
    const dialogNotifyRef = this.dialog.open(NotifyDialogComponent, {
      data: message
    });

    dialogNotifyRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Yes clicked');
        // DO SOMETHING
      }
    });
  }


}
