import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar, MatRadioButton, MatDatepicker } from '@angular/material';
import { NgForm } from '@angular/forms';
import { CrmcontactrefundService, CrmParamService } from 'src/app/shared';
import { AuthenticationService } from 'src/app/shared';

@Component({
    selector: 'app-ac03edit01-page',
    templateUrl: './ac03edit01-page.component.html',
    styleUrls: ['./ac03edit01-page.component.scss']
})
export class Ac03edit01PageComponent implements OnInit {
    constructor(
        public dialogbox: MatDialogRef<Ac03edit01PageComponent>,
        public service: CrmcontactrefundService,
        private snackBar: MatSnackBar,
        private authService: AuthenticationService,
        public paramservice: CrmParamService
    ) {
        this.currentUser = this.authService.currentUserValue;
    }
    placement = 'center';

    currentUser: any;
    public listItems: Array<string> = [];

    ngOnInit() {
        this.dropdownParamReasonRejectMasterRefresh();
    }

    onClose() {
        this.dialogbox.close();
        this.service.filter('Update click');
    }

    dropdownParamReasonRejectMasterRefresh() {
        this.listItems.push('-');
        this.paramservice.getReasonRejectMasterList().subscribe(data => {
            data.forEach(element => {
                this.listItems.push(element['remarks']);
            });
        });
    }

    onSubmit(form: NgForm) {
        console.log(form.value);
        // console.log('Submit hyrf_id = ' + form.value.hyrf_id);
        if (form.value.ac03_reject_doc_flag === 'Y') {
            // Case Reject Document
            if (form.value.ac03_reject_reason === null || form.value.ac03_reject_reason === '-') {
                this.snackBar.open('Please choose Reason Reject Transaction..!!!', '', {
                    duration: 3000
                });
            } else {
                form.value.ac02_appv_by = this.currentUser.userPrincipalName;
                this.service.updateAC03Status(form.value).subscribe(res => {
                    this.snackBar.open('Updated transaction Successful...!! [' + res.hyrf_id + ']', '', {
                        duration: 3000
                    });
                });
                this.dialogbox.close();
                this.service.filter('Update click');
            }
        } else {
            // Case Change Due refund Date
            if (form.value.ac03_change_due_date === null) {
                this.snackBar.open('Please choose Change Due Refund Date..!!!', '', {
                    duration: 3000
                });
            } else {
                form.value.ac02_appv_by = this.currentUser.userPrincipalName;
                this.service.updateAC03Status(form.value).subscribe(res => {
                    this.snackBar.open('Updated transaction Successful...!! [' + res.hyrf_id + ']', '', {
                        duration: 3000
                    });
                });
                this.dialogbox.close();
                this.service.filter('Update click');
            }
        }
        // if (form.value.ac02_appv_flag === 'A') {
        //     if (form.value.ac02_due_date == null) {
        //         this.snackBar.open('Please choose Due Date to refund..!!!', '', {
        //             duration: 3000
        //         });
        //     } else {
        //         form.value.ac02_appv_by = this.currentUser.userPrincipalName;
        //         console.log(form.value);
        //         this.service.updateAC02Status(form.value).subscribe(res => {
        //             this.snackBar.open('Updated transaction Successful...!! [' + res.hyrf_id + ']', '', {
        //                 duration: 3000
        //             });
        //         });

        //         this.dialogbox.close();
        //         this.service.filter('Update click');
        //     }
        // } else {
        //     form.value.ac02_appv_by = this.currentUser.userPrincipalName;
        //     this.service.updateAC02Reject(form.value).subscribe(res => {
        //         this.snackBar.open('Updated transaction Successful...!! [' + res.hyrf_id + ']', '', {
        //             duration: 3000
        //         });
        //     });
        //     this.dialogbox.close();
        //     this.service.filter('Update click');
        // }
    }
}
