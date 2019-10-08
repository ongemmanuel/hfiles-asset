import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { CompanyService } from '../../../app/company/company.service';


@Component({
  selector: 'app-add-file',
  templateUrl: './add-file.component.html',
  styleUrls: ['./add-file.component.css']
})
export class AddFileComponent {
  fileName = '';
  selectedFile: File;
  isValidFile: boolean;


  constructor(
    private dialogRef: MatDialogRef<AddFileComponent>,
    private compService: CompanyService
  ) { }


  templateLink() {
    console.log(this.compService.getCompanyTemplateLink());
    return this.compService.getCompanyTemplateLink();
  }

  cancelUpload() {
    this.dialogRef.close();
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

  colorStyleError() {
    return this.isValidFile === false && this.selectedFile !== undefined;
  }

  uploadFile() {
    console.log(this.selectedFile);
  }

  openLink() {
    window.open(this.templateLink());
  }

}
