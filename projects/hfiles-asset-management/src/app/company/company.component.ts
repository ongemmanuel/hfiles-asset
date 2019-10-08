import { Component, OnInit, ViewChild } from '@angular/core';
import { CompanyService } from '../company/company.service';
import { ConfigService } from '../shared/config.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog, MatDialogRef, MatDialogConfig, MatTable } from '@angular/material';
import { CompanyEditFormComponent } from '../modal-forms/company-edit-form/company-edit-form.component';
import { AddCompanyFormComponent } from '../modal-forms/add-company-form/add-company-form.component';
import { AddFileComponent } from '../shared/add-file/add-file.component';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})

export class CompanyComponent implements OnInit {
  @ViewChild(CompanyEditFormComponent, {})
  private compEditForm: CompanyEditFormComponent;

  @ViewChild(MatTable) table: MatTable<any>;

  constructor(
    private addCompDialog: MatDialog,
    private companyService: CompanyService,
    private config: ConfigService,
    private spinner: NgxSpinnerService,
    public dialog: MatDialog,
    private sb: MatSnackBar,
  ) { }

  setUpTable;
  companies;
  displayedColumns = [];
  isLoaded = false;
  selectedDetails;
  isActive = false;

  ngOnInit() {
    this.isActive = false;
    this.isLoaded = false;
    this.loadData();
  }

  loadData() {
    console.log('LOAD DATA');
    this.spinner.show('homeSpinner');
    this.companyService.getCompanyData(this.config.getRole()).subscribe(
      resp => {
        const comp = 'companies';
        this.companies = resp.body[comp];
        this.setUpTable = this.config.getCompanySetupTbl1();
        this.displayedColumns = this.setUpTable.map(elem => {
          const key = 'key';
          return elem[key];
        });
        this.isLoaded = true;
        this.spinner.hide('homeSpinner');
      },
      error => { }
    );
    // console.log(this.companies);
  }

  openForm(details) {
    // second param populate from cancel = false
    const role = this.config.getRole();
    this.compEditForm.populateForm(details, false, role);
  }

  openSnackBar(message: string, action: string) {
    this.sb.open(message, action , {
      panelClass: ['snackbar-design-global']
    });
  }

  addCompany() {
    const addCompDialogConfig = new MatDialogConfig();
    addCompDialogConfig.disableClose = true;
    addCompDialogConfig.autoFocus = false;
    const addDialog = this.addCompDialog.open(AddCompanyFormComponent, addCompDialogConfig);

    addDialog.afterOpened().subscribe(result => {
    });

    addDialog.beforeClosed().subscribe(resp => {
      if (resp !== undefined && resp !== null && resp.ok) {
        console.log(resp);
        this.loadData();
        this.openSnackBar(resp.name + ' was successfully added.', 'CLOSE');
      }
    });
  }

  addCompanyByBatch() {
    const addFileConfig = new MatDialogConfig();
    addFileConfig.disableClose = true;
    addFileConfig.autoFocus = false;

    const addFileDialog = this.addCompDialog.open(AddFileComponent, addFileConfig);

    addFileDialog.afterOpened().subscribe(result => {
    });

    addFileDialog.beforeClosed().subscribe(resp => {
      if (resp !== undefined && resp !== null && resp.ok) {
        this.loadData();
        this.openSnackBar(resp.name + ' was successfully added.', 'CLOSE');
      }
    });
  }

  isAllowedByRole(permissionKey) {
    return this.config.getRoleDataAdmin().includes(permissionKey);
  }


}
