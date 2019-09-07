import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar, MatRadioButton } from '@angular/material';
import { NgForm } from '@angular/forms';
import { CrmcontactrefundService } from 'src/app/shared';

@Component({
  selector: 'app-agimgview-page',
  templateUrl: './agimgview-page.component.html',
  styleUrls: ['./agimgview-page.component.scss']
})
export class AgimgviewPageComponent implements OnInit {

  constructor(
        public dialogbox: MatDialogRef<AgimgviewPageComponent>,
        public service: CrmcontactrefundService,
        private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  onClose() {
      this.dialogbox.close();
      this.service.filter('Update click');
  }

}
