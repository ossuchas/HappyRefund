import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { CrmcontactrefundService } from 'src/app/shared/services';

import { MatTableDataSource, MatSort, MatDialog, MatDialogConfig, MatSnackBar, MatPaginator } from '@angular/material';
import { CrmContactRefund } from 'src/app/shared';
import { Agedit01PageComponent } from './agedit01-page/agedit01-page.component';
import { environment } from 'src/environments/environment';
import { AgimgviewPageComponent } from './agimgview-page/agimgview-page.component';

@Component({
    selector: 'app-agreview-page',
    templateUrl: './agreview-page.component.html',
    styleUrls: ['./agreview-page.component.scss'],
    animations: [routerTransition()]
})
export class AgreviewPageComponent implements OnInit {
    constructor(private service: CrmcontactrefundService, private dialog: MatDialog, private snackBar: MatSnackBar) {
        this.service.listen().subscribe((m: any) => {
            console.log(m);
            this.refreshDataList();
        });
    }

    listData: MatTableDataSource<any>;
    displayedColumn: string[] = [
        'Options',
        'project',
        'unitnumber',
        'transferdateapprove',
        'contactid',
        'fullname',
        'remainingtotalamount',
        'tf01_appv_flag',
        'Memo'
    ];

    @ViewChild(MatSort, null) sort: MatSort;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    ngOnInit() {
        this.refreshDataList();
    }

    refreshDataList() {
        this.service.getCSSentList().subscribe(data => {
            this.listData = new MatTableDataSource(data);
            this.listData.paginator = this.paginator;
            this.listData.sort = this.sort;
        });
    }

    applyFilter(filtervalue: string) {
        this.listData.filter = filtervalue.trim().toLocaleLowerCase();
    }

    onEdit(hyrf: CrmContactRefund) {
        console.log(hyrf);
        this.service.formData = hyrf;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '55%';
        this.dialog.open(Agedit01PageComponent, dialogConfig);
    }

    onView(hyrf: CrmContactRefund) {
        // const img_url = 'http://happyrefundapi-happyrefund.devops-app.apthai.com/api/v1/image/01.jpg';
        // window.open(img_url, '_blank');
        console.log(hyrf);
        console.log('kai onView');
        this.service.formData = hyrf;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '55%';
        this.dialog.open(AgimgviewPageComponent, dialogConfig);
    }

    onViewMemo(transfernumber: string) {
        console.log(transfernumber);
        const img_url =
            'http://www.ap-ir.com/WebSalesReport/Forms/WF_Print_Form_Viewer.aspx?PFID=PF_TR_009_2&PFName=PF_TR_009_2.rpt&ParaName=@TransferNumber&ParaValue=' + transfernumber + '&ExtraQueryString=%7C@NitiBankName*%7C@NitiBankType*1%7C@NitiBankNo*%7C@CustomerBankName*%7C@CustomerBankType*1%7C@CustomerBankNo*%7C@ContactID*';
        // window.open('http://www.google.com', '_blank');
        // const img_url = environment.memoUrl_1 + transfernumber + environment.memoUrl_2;
        window.open(img_url, '_blank');
    }
}
