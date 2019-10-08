import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material';
import { ParamsService } from './params.service';
import { MatDialog, MatDialogConfig, MatExpansionModule } from '@angular/material';
import { ConfigService } from '../shared/config.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ParameterEditFormComponent } from '../modal-forms/parameter-edit-form/parameter-edit-form.component';
import { URLValues } from '../../assets/URLValues';
import { AdditionalConfig } from '../shared/additional.config';

export interface SubMenu {
  label: string;
  key: string;
}

export interface ParameterPayload {
  company_id: string;
  parameter_type: string;

}

@Component({
  selector: 'app-params',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.css']
})
export class ParamsComponent implements OnInit {
  // @ViewChild(AddFileComponent) addFileComp;
  selectedComp: string;
  subMenuList: SubMenu[];
  paramPayLoad: ParameterPayload = { company_id: '', parameter_type: '' };
  companyList: {};
  parametersForWithDepency;
  parametersForNoDepency;
  preSelectedComp;
  dataSource;
  private tableTitle: string;
  tableSubTitle: string;
  showParamTbl: boolean;
  showBatchUpload: boolean;
  currentSelectedParam: { key: string, label: string };
  currentSelectedComp: string;
  displayedColumns: string[];
  newFiltered;
  notEditing: boolean;
  addParamColumn;
  activeParam: string;

  fileName = '';
  selectedFile: File;
  isValidFile: boolean;
  paramGroups = AdditionalConfig.PARAMETER_GROUPING;

  parArrGroups = {};

  // @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild(MatTable) table: MatTable<any>;

  constructor(
    private config: ConfigService,
    private paramService: ParamsService,
    private spinner: NgxSpinnerService,
    private parameterEditDialog: MatDialog,

  ) { }

  // arr1.map(e => {
  //   const obj = {};
  //   obj[e] = arr2.includes(e);
  //   return obj;
  // })

  ngOnInit() {
    this.notEditing = false;
    this.spinner.show('homeSpinner');
    this.showParamTbl = false;
    this.showBatchUpload = false;

    this.parametersForWithDepency = this.config.getAppData().parameterDependency;
    this.parametersForNoDepency = this.config.getAppData().parameterTbl;
    this.subMenuList = this.config.getAppData().submenu;
    this.paramService.getCompanyList(this.config.getRole).subscribe(
      resp => {
        const comp = 'companies';
        this.companyList = resp.body[comp];
        console.log(this.subMenuList);
        this.preSelectedComp = Object.keys(this.companyList)[0];
        this.selectedComp = this.preSelectedComp;
        this.spinner.hide('homeSpinner');
      },
      error => { }
    );
    this.createParamList(this.subMenuList, this.paramGroups);
  }

  createParamList(paramList, groupList) {
    const arrKeyList = paramList.map(elem => elem.key);
    const groupArr = {};
    groupList.forEach(group => {
      const arr = [];
      group.parameters.forEach(elem => {
        if (arrKeyList.includes(elem.key)) {
          arr.push(elem);
        }
      });
      if (arr.length !== 0) {
        groupArr[group.label] = arr;
      }
     });
    this.parArrGroups = groupArr;
    console.log(this.parArrGroups);
  }

  populateTableParams(parameter, selectedCompany) {
    console.log(parameter, selectedCompany);
    // this.showParamTbl = false;
    if (parameter !== undefined) {
      this.spinner.show('homeSpinner');
      this.currentSelectedParam = parameter;
      this.paramPayLoad.company_id = selectedCompany;
      this.paramPayLoad.parameter_type = parameter.key;
      this.displayedColumns = this.processDisplayColumns(parameter);
      this.paramService.getParameterOptions(this.paramPayLoad).subscribe(
        resp => {
          const opt = 'options';
          this.dataSource = resp.body[opt];
          this.spinner.hide('homeSpinner');
          this.showBatchUpload = false;
          this.showParamTbl = true;
          // console.log(this.dataSource);
          // console.log(this.newFiltered);
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  openParameterBatchUploader() {
    this.showParamTbl = false;
    this.showBatchUpload = true;
    this.selectedFile = undefined;
    this.fileName = '';
  }

  changeDropDown(val, comp) {
    this.selectedComp = val;
    if (this.showParamTbl) {
      this.populateTableParams(this.currentSelectedParam, val);
    } else {

    }
  }


  processDisplayColumns(params): string[] {
    const key = params.key;
    const keyAndDependency = this.config.getAppData().paramkeyWithDependecy;
    const arrDep = Object.keys(keyAndDependency);
    let paramDep = null;


    if (arrDep.includes(key)) {
      paramDep = this.config.getAppData().parameterDependency;
    } else {
      paramDep = this.config.getAppData().parameterTbl;
    }

    this.addParamColumn = paramDep;


    console.log(paramDep);

    const filteredVal = paramDep.filter(param => {
      return param.type !== 'hidden';
    });

    // paramDep will retain blank key value for Action label
    this.newFiltered = filteredVal.map(param =>
      param.label === 'Action' ? { ...param, key: 'action' } : param
    );


    // if (this.isAllowedPipe.transform('ADM-8')) {
    //   console.log('EDIT PARAMETER TRUE');
    //   return this.newFiltered.map(elem => elem.key);
    // } else {
    //   console.log('EDIT PARAMETER FALSE');
    //   return this.newFiltered.map(elem => elem.key).filter(param => param !== 'action');
    // }

    return this.newFiltered.map(elem => elem.key);

  }

  editParamData(values): void {
    values.company_id = this.paramPayLoad.company_id;
    values.parameter_type = this.paramPayLoad.parameter_type;
    values.paramLabel = this.currentSelectedParam.label;
    const parameterEditConfig = new MatDialogConfig();
    parameterEditConfig.disableClose = true;
    parameterEditConfig.autoFocus = true;
    parameterEditConfig.data = values;
    const paramDialog = this.parameterEditDialog.open(ParameterEditFormComponent, parameterEditConfig);

    paramDialog.afterOpened().subscribe(result => {
      this.spinner.hide('homeSpinner');
    });

    paramDialog.beforeClosed().subscribe(result => {
      console.log(result);
      if (result.event === 'Cancel') {
      } else {
        this.updateRowData();
      }
    });

  }

  updateRowData() {
    this.paramService.getParameterOptions(this.paramPayLoad).subscribe(
      resp => {
        const opt = 'options';
        this.dataSource = resp.body[opt];
        this.showParamTbl = true;
        this.table.renderRows();
        console.log('Done Refresh');
        this.spinner.hide('homeSpinner');
      },
      error => {
        console.log(error);
        this.spinner.hide('homeSpinner');
      }
    );
  }

  getDependencyParameterOptions(values) {
    this.spinner.show('homeSpinner');
    const payload: ParameterPayload = { company_id: '', parameter_type: '' };
    payload.company_id = this.paramPayLoad.company_id;
    payload.parameter_type = values.dependency_parameter_type;
    this.paramService.getParameterOptions(payload).subscribe(
      resp => {
        const opt = 'options';
        values.options = resp.body[opt];
        console.log(values.options);
        this.editParamData(values);
      },
      error => {
        console.log(error);
      }
    );
  }

  addParameter() {
    const blankVal = {};
    this.addParamColumn.map(elem => {
      if (elem.key !== '') {
        if (elem.key === 'dependency_parameter_type') {
          blankVal[elem.key] = this.getDependencyVal(this.paramPayLoad.parameter_type);
        } else if (elem.key === 'parameter_status') {
          blankVal[elem.key] = 'Active';
        } else {
          blankVal[elem.key] = '';
        }
      }
    });
    this.getDependencyParameterOptions(blankVal);
  }

  getTemplateParam() {
    return URLValues.PARAM_TEMPLATE;
  }

  getDependencyVal(param) {
    return this.config.getAppData().paramkeyWithDependecy[param];
  }

  colorStyleError() {
    return this.isValidFile === false && this.selectedFile !== undefined;
  }

  onFileSelect(event) {
    this.fileName = event.target.files[0].name;
    this.selectedFile = event.target.files[0];
    console.log(event.target.files[0].type);
    if (event.target.files[0].type === 'application/vnd.ms-excel') {
      this.isValidFile = true;
    } else {
      this.isValidFile = false;
    }
    console.log(this.isValidFile);
  }

  uploadParameterFile() {
    console.log(this.selectedFile);
  }

  isAllowedByRole(permissionKey) {
    return this.config.getRoleDataAdmin().includes(permissionKey);
  }

  isIncludedInGroup(group, param) {
    const arrGroup = group.map(elem => {
      return elem['key'];
    });
    return arrGroup.includes(param.key);
  }


}
