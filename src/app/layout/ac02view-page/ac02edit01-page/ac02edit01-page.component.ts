import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar, MatRadioButton, MatDatepicker } from '@angular/material';
import { NgForm } from '@angular/forms';
import { CrmcontactrefundService } from 'src/app/shared';
import { User, AuthenticationService } from 'src/app/shared';

@Component({
    selector: 'app-ac02edit01-page',
    templateUrl: './ac02edit01-page.component.html',
    styleUrls: ['./ac02edit01-page.component.scss']
})
export class Ac02edit01PageComponent implements OnInit {
    constructor(
        public dialogbox: MatDialogRef<Ac02edit01PageComponent>,
        public service: CrmcontactrefundService,
        private snackBar: MatSnackBar,
        private authService: AuthenticationService
    ) {
        this.currentUser = this.authService.currentUserValue;
    }
    placement = 'center';

    currentUser: any;

    ngOnInit() {}

    onClose() {
        this.dialogbox.close();
        this.service.filter('Update click');
    }

    onSubmit(form: NgForm) {
        // console.log('Current User: ' + this.currentUser.userPrincipalName);
        console.log('Submit hyrf_id = ' + form.value.hyrf_id);
        if (form.value.ac02_appv_flag === 'A') {
            if (form.value.ac02_due_date == null) {
                this.snackBar.open('Please choose Due Date to refund..!!!', '', {
                    duration: 3000
                });
            } else {
                form.value.ac02_appv_by = this.currentUser.userPrincipalName;
                console.log(form.value);
                this.service.updateAC02Status(form.value).subscribe(res => {
                    this.snackBar.open('Updated transaction Successful...!! [' + res.hyrf_id + ']', '', {
                        duration: 3000
                    });
                });

                this.dialogbox.close();
                this.service.filter('Update click');
            }
        } else {
            form.value.ac02_appv_by = this.currentUser.userPrincipalName;
            this.service.updateAC02Reject(form.value).subscribe(res => {
                this.snackBar.open('Updated transaction Successful...!! [' + res.hyrf_id + ']', '', {
                    duration: 3000
                });
            });
            this.dialogbox.close();
            this.service.filter('Update click');
        }
    }
}
