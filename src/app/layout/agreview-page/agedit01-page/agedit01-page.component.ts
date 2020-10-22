import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar, MatRadioButton } from '@angular/material';
import { NgForm } from '@angular/forms';
import { CrmcontactrefundService, VwCrmRefundBanknamelstService } from 'src/app/shared';
import { User, AuthenticationService } from 'src/app/shared';
import { VwCrmRefundMstBankService } from 'src/app/shared';

import { MatTableDataSource, MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';

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
        public serviceBank: VwCrmRefundMstBankService,
        public serviceBankName: VwCrmRefundBanknamelstService,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {
        this.currentUser = this.authService.currentUserValue;
    }
    currentUser: any;
    public listItems: Array<string> = [];
    public listItemsBankName: Array<string> = [];

    ngOnInit() {
        this.dropdownBankMasterRefresh();
        this.dropdownBankNameListRefresh(this.data.hyrf_id);
    }

    onClose() {
        this.dialogbox.close();
        this.service.filter('Update click');
    }

    dropdownBankMasterRefresh() {
        this.serviceBank.getBankMaster().subscribe(data => {
            data.forEach(element => {
                console.log('ชื่อธนาคาร', element);

                this.listItems.push(element['adbankname']);
            });
        });
    }

    dropdownBankNameListRefresh(id: number) {
        this.serviceBankName.getBankAccountName(id).subscribe(data => {
            data.forEach(element => {
                console.log('ชื่อบัญชีลูกค้า', element);
                this.listItemsBankName.push(element['fullname']);
            });
        });
    }

    onSubmit(form: NgForm) {
        // console.log('Current User' + this.currentUser.userPrincipalName);
        form.value.tf01_appv_by = this.currentUser.userPrincipalName;
        console.log(form.value);
        this.service.updateTF01Status(form.value).subscribe(res => {
            this.snackBar.open('Updated transaction Successful...!! [' + res.hyrf_id + ']', '', {
                duration: 2000
            });
        });

        // if (form.value.tf01_appv_flag === 'A') {
        //     const msg = 'ทดสอบการบันทึก ' + this.data.hyrf_id + ', ' + this.data.productid + ', ' + this.data.unitnumber;
        //     this.service.send2lineapi('PERSONAL', 'HAPPYREFUND', msg).subscribe(res => {
        //         console.log(res);
        //     });
        // }

        this.dialogbox.close();
        this.service.filter('Update click');
    }
}
