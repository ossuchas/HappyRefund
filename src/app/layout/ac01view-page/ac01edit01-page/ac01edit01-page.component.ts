import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar, MatRadioButton } from '@angular/material';
import { NgForm } from '@angular/forms';
import { CrmcontactrefundService } from 'src/app/shared';
import { User, AuthenticationService } from 'src/app/shared';

@Component({
    selector: 'app-ac01edit01-page',
    templateUrl: './ac01edit01-page.component.html',
    styleUrls: ['./ac01edit01-page.component.scss']
})
export class Ac01edit01PageComponent implements OnInit {
    constructor(
        public dialogbox: MatDialogRef<Ac01edit01PageComponent>,
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
        form.value.ac01_appv_by = this.currentUser.userPrincipalName;
        console.log(form.value);
        this.service.updateAC01Status(form.value).subscribe(res => {
            this.snackBar.open('Updated transaction Successful...!! [' + res.hyrf_id + ']', '', {
                duration: 3000
            });
        });
    }
}
