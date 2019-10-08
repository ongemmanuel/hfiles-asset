import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { ConfigService } from '../../shared/config.service';
import { ParamsService } from '../../params/params.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-parameter-edit-form',
  templateUrl: './parameter-edit-form.component.html',
  styleUrls: ['./parameter-edit-form.component.css']
})
export class ParameterEditFormComponent implements OnInit {
  editParamGroup: FormGroup;
  title: string;
  paramValOptions: [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private dialogRef: MatDialogRef<ParameterEditFormComponent>,
    private errorDialog: MatDialog,
    private fb: FormBuilder,
    private config: ConfigService,
    private paramService: ParamsService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.paramValOptions = this.data.options;
    console.log(this.data);
    this.createFormContent();
    console.log(this.editParamGroup);
  }

  createFormContent() {
    const paramDep = this.config.getAppData().parameterDependency;
    console.log(paramDep);

    if (this.data.parameter_id === '') {
      this.title = 'Add ' + this.data.paramLabel;
    } else {
      this.title = 'Edit ' + this.data.paramLabel;
    }

    this.editParamGroup = this.fb.group({});
    Object.keys(this.data).forEach(key => {
      if (this.data[key] !== null && key !== 'paramLabel' && key !== 'options') {
        if (key === 'dependency_parameter_type') {
          this.editParamGroup.addControl(key, new FormControl({ value: this.data[key], disabled: true }));
        } else if (key === 'parameter_id') {
          this.editParamGroup.addControl(key, new FormControl(this.data[key]));
        } else {
          this.editParamGroup.addControl(key, new FormControl(this.data[key], Validators.required));
        }
      }
    });
  }

  getLabelEqui(id) {
    const paramDep = this.config.getAppData().parameterDependency;
    return paramDep.map(obj => {
      if (obj.key === id) {
        return obj.label;
      }
    }).find(elem => elem !== undefined);
  }

  onSubmit(form) {
    this.spinner.show('homeSpinner');
    console.log(form.getRawValue());
    console.log('SUBMIT');
    this.paramService.updateParameter(form.getRawValue()).subscribe(
      resp => {
        this.dialogRef.close({ event: 'Success' });
      },
      error => {
      }
    );
  }

  onCancel() {
    console.log('CANCEL');
    this.dialogRef.close({ event: 'Cancel' });
  }

}
