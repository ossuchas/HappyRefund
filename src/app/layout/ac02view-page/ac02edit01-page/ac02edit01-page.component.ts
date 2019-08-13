import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar, MatRadioButton } from '@angular/material';
import { NgForm } from '@angular/forms';
import { CrmcontactrefundService } from 'src/app/shared';

@Component({
    selector: 'app-ac02edit01-page',
    templateUrl: './ac02edit01-page.component.html',
    styleUrls: ['./ac02edit01-page.component.scss']
})
export class Ac02edit01PageComponent implements OnInit {
    constructor(
        public dialogbox: MatDialogRef<Ac02edit01PageComponent>,
        public service: CrmcontactrefundService,
        private snackBar: MatSnackBar
    ) {}

    ngOnInit() {}

    onClose() {
        this.dialogbox.close();
        this.service.filter('Update click');
    }

    onSubmit(form: NgForm) {
        console.log('Submit hyrf_id = ' + form.value.hyrf_id);
        console.log(form.value);
        this.service.updateRefund(form.value).subscribe(res => {
            this.snackBar.open('Updated transaction Successful...!! [' + res.hyrf_id + ']', '', {
                duration: 3000
            });
        });
    }
}
