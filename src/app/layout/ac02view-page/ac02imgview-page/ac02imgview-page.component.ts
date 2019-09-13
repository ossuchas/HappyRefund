import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatRadioButton } from '@angular/material';
import { NgForm } from '@angular/forms';
import { CrmcontactrefundService, CrmContactRefundListImgUrlService, CrmContactRefundListImgUrl } from 'src/app/shared';

import { MatTableDataSource, MatDialog, MatDialogConfig, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';

@Component({
    selector: 'app-ac02imgview-page',
    templateUrl: './ac02imgview-page.component.html',
    styleUrls: ['./ac02imgview-page.component.scss']
})
export class Ac02imgviewPageComponent implements OnInit {
    constructor(
        public dialogbox: MatDialogRef<Ac02imgviewPageComponent>,
        public service: CrmContactRefundListImgUrlService,
        private snackBar: MatSnackBar,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {
        this.service.listen().subscribe((m: any) => {
            console.log(m);
            this.refreshDataList(this.data.hyrf_id);
        });
    }

    listData: MatTableDataSource<any>;
    displayedColumn: string[] = ['Options', 'img_seqn', 'img_name'];
    // displayedColumn: string[] = ['Options', 'img_id', 'img_ref_contact_refund', 'img_seqn', 'img_name', 'img_url'];

    ngOnInit() {
        this.refreshDataList(this.data.hyrf_id);
    }

    onClose() {
        this.dialogbox.close();
        this.service.filter('Update click');
    }

    refreshDataList(id: number) {
        this.service.getImgList(id).subscribe(data => {
            this.listData = new MatTableDataSource(data);
        });
    }

    onView(data: CrmContactRefundListImgUrl) {
        console.log(data.img_id);
        const img_url = data.img_url;
        // const img_url = 'http://192.168.2.29:9400/happyrefundcs/05a7c336d5fc11e99af60a580a8101e3_2196.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=MD6RUWLB2UL23HWWIQ95%2F20190913%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20190913T095909Z&X-Amz-Expires=172800&X-Amz-SignedHeaders=host&X-Amz-Signature=555709c966d4e30b97c5df815938802b79463d9f1ce4856969204a36dc5b625b';
        window.open(img_url, '_blank');
    }
}
