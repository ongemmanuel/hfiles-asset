import { Component, ChangeDetectionStrategy, QueryList, ElementRef, ViewChildren, Renderer2, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { GeneralPermissionService } from '../general-permission/general-permission.service';
import { ConfigService } from '../shared/config.service';
import { AdditionalConfig } from '../shared/additional.config';
import { NgxSpinnerService } from 'ngx-spinner';
import { TransformFormatValueService } from '../general-permission/transform-format-value.service';

@Component({
  selector: 'app-general-permission',
  templateUrl: './general-permission.component.html',
  styleUrls: ['./general-permission.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class GeneralPermissionComponent implements OnInit {
  isCheckListReady = false;
  comp = 'companies';
  modu = 'modules';
  rolesList: string[] = [];
  selectedRole: string = null;
  permissionFormGroup: FormGroup;
  roleOfUser: string;
  permissionRole = {};
  permissionTab = {};
  defaultCheckedValues = {};
  companiesArray = {};
  permissionsFolder = AdditionalConfig.PERMISSION_CONFIG_FOLDER;
  permissionsFldCat = AdditionalConfig.PERMISSION_CONFIG_FIELDCATEGORY;
  isEditActive = false;

  @ViewChildren('parentCheck') chkParents: QueryList<ElementRef>;
  constructor(
    private configService: ConfigService,
    private genPermService: GeneralPermissionService,
    private fb: FormBuilder,
    private renderer: Renderer2,
    private spinner: NgxSpinnerService,
    private transform: TransformFormatValueService
  ) { }


  ngOnInit() {
    this.spinner.show('homeSpinner');
    this.roleOfUser = this.configService.getRole();
    this.permissionTab = this.configService.getAppData().permissions2;
    this.permissionRole = this.configService.getAppData().permissionRoles;

    Object.keys(this.permissionRole).forEach(key => {
      if (key === this.roleOfUser) {
        this.rolesList = this.permissionRole[key];
      }
    });

    this.getCheckedAndCompList(false);
    // OnIt End
  }

  getCheckedAndCompList(fromSave) {
    this.genPermService.getCompanyListAndCheckedValues(this.roleOfUser).subscribe(
      resp => {
        console.log(resp);
        this.defaultCheckedValues = resp[0].body;
        this.companiesArray = resp[1].body['companies'];
        if (fromSave) {
          this.setDefaultValues(this.defaultCheckedValues, this.selectedRole);
          this.spinner.hide('savingSpinner');
        } else {
          this.spinner.hide('homeSpinner');
        }
      },
      error => {
        if (fromSave) {
          this.spinner.hide('savingSpinner');
        } else {
          this.spinner.hide('homeSpinner');
        }
      });
  }

  createFormGroup() {
    this.permissionFormGroup = this.fb.group({
      // role_id: this.fb.control,
      permission: this.fb.group({
        companies: this.fb.group({}),
        modules: this.fb.group({
          ADM: this.fb.group({}),
          EMP: this.fb.group({}),
          REP: this.fb.group({}),
          RECRUIT: this.fb.group({}),
        })
      })
    });
    this.createChecklist(); 
  }

  createChecklist() {
    Object.keys(this.permissionTab).map(mapKey => {
      if (mapKey !== 'companies') {
        // tslint:disable-next-line: max-line-length
        const moduleChildGroup = (((this.permissionFormGroup.get('permission') as FormGroup).get('modules') as FormGroup).get(mapKey) as FormGroup);
        Object.keys(this.permissionTab[mapKey]).forEach(key => {
          if (this.isObjectEmpty(this.permissionTab[mapKey][key])) {
            moduleChildGroup.addControl(key, new FormControl());
          } else {
            moduleChildGroup.addControl(key, new FormGroup({}));
            Object.keys(this.permissionTab[mapKey][key]).forEach(innerKey => {
              (moduleChildGroup.get(key) as FormGroup).addControl(innerKey, new FormGroup({}));
              Object.keys(this.permissionTab[mapKey][key][innerKey]).forEach(innerPermissionKey => {
                ((moduleChildGroup.get(key) as FormGroup).get(innerKey) as FormGroup).addControl(innerPermissionKey, new FormControl());
              });
            });
          }
        });
      } else {
        Object.keys(this.companiesArray).forEach(comp => {
          ((this.permissionFormGroup.get('permission') as FormGroup).get('companies') as FormGroup).addControl(comp, new FormControl());
        });
      }
    });
    console.log(this.permissionFormGroup);
    // console.log(this.defaultCheckedValues);
  }

  setDefaultValues(values, id) {
    if (this.permissionFormGroup !== undefined) {
      this.permissionFormGroup.reset();
    }
    this.createFormGroup();
    this.chkParents.changes.subscribe(par => {
      par.toArray().forEach(elem => {
        elem.checked = false;
      });
    });
    let defaultValues;
    defaultValues = values[id];
    console.log(defaultValues);
    const group = this.permissionFormGroup.controls.permission['controls'];
    Object.keys(group).forEach(element => {
      if (element === 'companies') {
        Object.keys(group[element].controls).forEach(compElem => {
          (group[element].controls[compElem] as FormControl).patchValue(defaultValues.companies.includes(compElem));
        });
      } else {
        Object.keys(group[element].controls).forEach(moduleElem => {
          // console.log(defaultValues.modules[moduleElem]);
          if (defaultValues.modules[moduleElem] !== null && defaultValues.modules[moduleElem] !== undefined) {
            // console.log(defaultValues.modules[moduleElem]);
            Object.keys(group[element].controls[moduleElem].controls).forEach(innerModuleElem => {
              if (group[element].controls[moduleElem].get(innerModuleElem) instanceof FormControl) {
                // tslint:disable-next-line: max-line-length
                (group[element].controls[moduleElem].get(innerModuleElem) as FormControl).patchValue(Object.keys(defaultValues.modules[moduleElem]).includes(innerModuleElem));
              } else {
                Object.keys(group[element].controls[moduleElem].get(innerModuleElem).controls).forEach(arrHolder => {
                  Object.keys((group[element].controls[moduleElem].get(innerModuleElem).controls[arrHolder].controls)).forEach(val => {
                    if (defaultValues.modules[moduleElem][innerModuleElem] !== undefined &&
                      defaultValues.modules[moduleElem][innerModuleElem] !== null) {
                      if (!this.isObjectEmpty(defaultValues.modules[moduleElem][innerModuleElem][arrHolder])) {
                        const isChecked = Object.keys(defaultValues.modules[moduleElem][innerModuleElem][arrHolder]).includes(val);
                        (group[element].controls[moduleElem].get(innerModuleElem).controls[arrHolder].get(val) as FormControl)
                          .patchValue(isChecked);
                        if (isChecked) {
                          this.chkParents.changes.subscribe(par => {
                            par.toArray().forEach(elem => {
                              if (innerModuleElem === elem.id) {
                                elem.checked = true;
                              }
                            });
                          });
                        }
                      }
                    }
                  });
                });
              }
            });
          }
        });
      }
    });
    this.permissionFormGroup.disable();
    this.isEditActive = false;
  }

  retrieveValues(id) {
    this.selectedRole = id;
    this.setDefaultValues(this.defaultCheckedValues, id);
  }

  isThisFormControl(control) {
    return control.value instanceof FormControl;
  }

  isObjectEmpty(checkBox) {
    if (checkBox === null || checkBox === undefined) {
      return true;
    } else {
      return (Object.keys(checkBox).length === 0 && checkBox.constructor === Object);
    }
  }

  returnZero() {
    // prevents sorted display of keyvalue pair
    return 0;
  }

  get compsArray() {
    return ((this.permissionFormGroup.get('permission') as FormGroup).get('companies') as FormGroup);
  }

  permissionElem(moduleChildKey) {
    return (((this.permissionFormGroup.get('permission') as FormGroup).get('modules') as FormGroup).get(moduleChildKey) as FormGroup);
  }

  getEquivalentName(rootKey, parentKey, childKey) {
    let equivalentName: string;
    Object.keys(this.permissionTab[rootKey][parentKey]).forEach(key => {
      Object.keys(this.permissionTab[rootKey][parentKey][key]).forEach(innerKey => {
        equivalentName = this.permissionTab[rootKey][parentKey][key][childKey];
      });
    });
    return equivalentName;
  }

  triggerChild(event, tabKey, parentKey) {
    const group = this.permissionElem(tabKey).get(parentKey) as FormGroup;
    Object.keys(group.controls).forEach(innerControlHolder => {
      const innerGrp = group.get(innerControlHolder) as FormGroup;
      Object.keys(innerGrp.controls).forEach(innerControl => {
        (innerGrp.controls[innerControl].patchValue(event.checked));
      });
    });
  }

  triggerParent(event, tabKey, parentKey, parentCheckBox) {
    const group = this.permissionElem(tabKey).get(parentKey) as FormGroup;
    console.log(tabKey, parentKey);
    if (event.checked) {
      parentCheckBox.checked = true;
    } else {
      const isCheckExist = Object.keys(group.controls).some(holder => {
        return Object.keys((group.controls[holder] as FormGroup).controls).some(element => {
          return (group.controls[holder] as FormGroup).controls[element].value;
        });
      });
      parentCheckBox.checked = isCheckExist;
    }
  }


  zsaveValues() {
    console.log(this.permissionFormGroup.value);
  }

  saveValues() {
    this.spinner.show('savingSpinner');
    const finalVal = this.transform.transformValue(this.permissionFormGroup.value, this.selectedRole);
    this.sendToSaveRoleService(finalVal);
  }

  enableEdit() {
    this.isEditActive = true;
    this.permissionFormGroup.enable();
  }

  cancelEdit() {
    this.isEditActive = false;
    this.setDefaultValues(this.defaultCheckedValues, this.selectedRole);
  }

  sendToSaveRoleService(value) {
    this.genPermService.saveRoleData(value).subscribe(resp => {
      console.log(resp);
      this.getCheckedAndCompList(true);
    },
      error => {
        this.spinner.hide('savingSpinner');
      });
  }

  isAllowedByRole(permissionKey) {
    return this.configService.getRoleDataAdmin().includes(permissionKey);
  }

}
