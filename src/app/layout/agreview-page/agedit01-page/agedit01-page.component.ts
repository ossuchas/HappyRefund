import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar, MatRadioButton } from '@angular/material';
import { NgForm } from '@angular/forms';
import { CrmcontactrefundService } from 'src/app/shared';
import { User, AuthenticationService } from 'src/app/shared';
import { VwCrmRefundMstBankService } from 'src/app/shared';

@Component({
    selector: 'app-agedit01-page',
    templateUrl: './agedit01-page.component.html',
    styleUrls: ['./agedit01-page.component.scss']
})
export class Agedit01PageComponent implements OnInit {
    constructor(
        public dialogbox: MatDialogRef<Agedit01PageComponent>,
        public service: CrmcontactrefundService,
        private snackBar: MatSnackBar,
        private authService: AuthenticationService,
        public serviceBank: VwCrmRefundMstBankService
    ) {
        this.currentUser = this.authService.currentUserValue;
    }
    currentUser: any;
    public listItems: Array<string> = [];

    ngOnInit() {
        this.dropdownBankMasterRefresh();
    }

    onClose() {
        this.dialogbox.close();
        this.service.filter('Update click');
    }

    dropdownBankMasterRefresh() {
        this.serviceBank.getBankMaster().subscribe(data => {
            data.forEach(element => {
                this.listItems.push(element['adbankname']);
            });
        });
    }

    onSubmit(form: NgForm) {
        // console.log('Submit hyrf_id = ' + form.value.hyrf_id);
        // console.log('Current User' + this.currentUser.userPrincipalName);
        form.value.tf01_appv_by = this.currentUser.userPrincipalName;
        // console.log('tf01_appv_by ' + form.value.tf01_appv_by);
        console.log(form.value);
        this.service.updateTF01Status(form.value).subscribe(res => {
            this.snackBar.open('Updated transaction Successful...!! [' + res.hyrf_id + ']', '', {
                duration: 2000
            });
        });

        this.dialogbox.close();
        this.service.filter('Update click');
    }
}
