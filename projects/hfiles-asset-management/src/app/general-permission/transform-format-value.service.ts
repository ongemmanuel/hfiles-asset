import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransformFormatValueService {

  constructor() { }
  transformValue(val, selectedRole) {
    val.permission.companies = Object.keys(val.permission.companies).filter(element => val.permission.companies[element]);
    Object.keys(val.permission.modules).forEach(element => {
      Object.keys(val.permission.modules[element]).forEach(innerElement => {
        if (val.permission.modules[element][innerElement] === null || val.permission.modules[element][innerElement] === false) {
          // delete val.permission.modules[element][innerElement]; DOES NOT WORK
          const objWithNull = val.permission.modules[element];
          delete objWithNull[innerElement];
        } else if (val.permission.modules[element][innerElement] instanceof Object
          && Object.keys(val.permission.modules[element][innerElement]).length > 0) {
          Object.keys(val.permission.modules[element][innerElement]).forEach(innerSubElem => {
            const subValues = Object.keys(val.permission.modules[element][innerElement][innerSubElem])
              .filter(innerSubElemChild => val.permission.modules[element][innerElement][innerSubElem][innerSubElemChild]);
            if (subValues.length > 0) {
              val.permission.modules[element][innerElement][innerSubElem] = subValues;
            } else {
              const emptyInnerSub = val.permission.modules[element][innerElement];
              delete emptyInnerSub[innerSubElem];
            }
          });
        }
      });
    });

    Object.keys(val.permission.modules).forEach(element => {
      if (this.isObjectEmpty(val.permission.modules[element])) {
        const empObj = val.permission.modules;
        delete empObj[element];
      } else {
        Object.keys(val.permission.modules[element]).forEach(subElement => {
          // console.log(finalValue.permission.modules[element][subElement]);
          if (this.isObjectEmpty(val.permission.modules[element][subElement])) {
            const empObjInner = val.permission.modules[element];
            delete empObjInner[subElement];
            if (this.isObjectEmpty(val.permission.modules[element])) {
              const empObj = val.permission.modules;
              delete empObj[element];
            }
          }
        });
      }
    });

    // Change true to {} as the backend requires
    Object.keys(val.permission.modules).forEach(element => {
      Object.keys(val.permission.modules[element]).forEach(innerElement => {
        if (val.permission.modules[element][innerElement] === true) {
          val.permission.modules[element][innerElement] = {};
        }
      });
    });

    console.log(val);

    val['role_id'] = selectedRole;

    return val;
  }

  isObjectEmpty(checkBox) {
    if (checkBox === null || checkBox === undefined) {
      return true;
    } else {
      return (Object.keys(checkBox).length === 0 && checkBox.constructor === Object);
    }
  }


}
