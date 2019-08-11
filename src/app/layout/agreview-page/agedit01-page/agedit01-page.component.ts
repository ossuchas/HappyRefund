import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar, MatRadioButton } from '@angular/material';
import { NgForm } from '@angular/forms';
import { CrmcontactrefundService } from 'src/app/shared';

@Component({
  selector: 'app-agedit01-page',
  templateUrl: './agedit01-page.component.html',
  styleUrls: ['./agedit01-page.component.scss']
})
export class Agedit01PageComponent implements OnInit {

  constructor(
    public dialogbox: MatDialogRef<Agedit01PageComponent>,
    public service: CrmcontactrefundService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  onClose() {
    this.dialogbox.close();
    this.service.filter('Update click');
  }

  onReject(form: NgForm) {
    console.log('Reject hyrf_id = ' + form.value.hyrf_id);
    form.value.tf01_appv_flag = 'N';
    console.log(form.value);
    this.service.updateRefund(form.value).subscribe(res => {
      this.snackBar.open('Happy Refund Reject Id: ' + res.hyrf_id + ' updated...!!!' ,
      '', {
        duration: 3000
      });
    });
    this.dialogbox.close();
  }

  onSubmit(form: NgForm) {
    console.log('Submit hyrf_id = ' + form.value.hyrf_id);
    console.log(form.value);
    this.service.updateRefund(form.value).subscribe(res => {
      this.snackBar.open('Updated transaction Successful...!! [' + res.hyrf_id + ']' ,
      '', {
        duration: 3000
      });
    });
  }

}
