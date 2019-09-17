import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar, MatRadioButton } from '@angular/material';
import { NgForm } from '@angular/forms';
import { CrmcontactrefundService } from 'src/app/shared';
import { User, AuthenticationService } from 'src/app/shared';

@Component({
    selector: 'app-tf02edit01-page',
    templateUrl: './tf02edit01-page.component.html',
    styleUrls: ['./tf02edit01-page.component.scss']
})
export class Tf02edit01PageComponent implements OnInit {
    constructor(
        public dialogbox: MatDialogRef<Tf02edit01PageComponent>,
        public service: CrmcontactrefundService,
        private snackBar: MatSnackBar,
        private authService: AuthenticationService
    ) {
        this.currentUser = this.authService.currentUserValue;
    }
    currentUser: any;

    ngOnInit() {}

    onClose() {
        this.dialogbox.close();
        this.service.filter('Update click');
    }

    onSubmit(form: NgForm) {
        console.log('Submit hyrf_id = ' + form.value.hyrf_id);
        console.log('Current User' + this.currentUser.userPrincipalName);
        form.value.tf02_appv_by = this.currentUser.userPrincipalName;
        console.log('tf02_appv_by' + form.value.t201_appv_by);
        console.log(form.value);
        this.service.updateTF02Status(form.value).subscribe(res => {
            this.snackBar.open('Updated transaction Successful...!! [' + res.hyrf_id + ']', '', {
                duration: 3000
            });
        });

        this.dialogbox.close();
        this.service.filter('Update click');
    }
}
