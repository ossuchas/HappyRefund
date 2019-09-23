import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { CrmcontactrefundService } from 'src/app/shared/services';

import { MatTableDataSource, MatSort, MatDialog, MatDialogConfig, MatSnackBar, MatPaginator } from '@angular/material';
import { CrmContactRefund } from 'src/app/shared';
import { Agedit01PageComponent } from './agedit01-page/agedit01-page.component';
import { environment } from 'src/environments/environment';
import { AgimgviewPageComponent } from './agimgview-page/agimgview-page.component';
import { AuthenticationService } from 'src/app/shared';

@Component({
    selector: 'app-agreview-page',
    templateUrl: './agreview-page.component.html',
    styleUrls: ['./agreview-page.component.scss'],
    animations: [routerTransition()]
})
export class AgreviewPageComponent implements OnInit {
    constructor(
        private service: CrmcontactrefundService,
        private dialog: MatDialog,
        private snackBar: MatSnackBar,
        private authService: AuthenticationService
    ) {
        this.currentUser = this.authService.currentUserValue;

        this.service.listen().subscribe((m: any) => {
            console.log(m);
            this.refreshDataList();
        });

        console.log('roletf01 : ' + this.currentUser.roletf01);
        if (this.currentUser.roletf01 === '1') {
            this.isAuthorized = true;
        } else {
            this.isAuthorized = false;
        }
    }
    currentUser: any;
    isAuthorized = true;
    listData: MatTableDataSource<any>;

    displayedColumn: string[] = [
        'Options',
        'project',
        'unitnumber',
        'transferdateapprove',
        // 'contactid',
        'fullname',
        'remainingtotalamount',
        'tf01_appv_flag',
        'Memo'
    ];

    @ViewChild(MatSort, null) sort: MatSort;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    // Base url
    readonly APIUrl = environment.apiUrl;
    ngOnInit() {
        this.refreshDataList();
    }
    refreshDataList() {
        // console.log(this.messageAPI);
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
        console.log(hyrf);
        this.service.formData = hyrf;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '55%';
        dialogConfig.data = {
            hyrf_id: hyrf.hyrf_id
        };
        this.dialog.open(AgimgviewPageComponent, dialogConfig);
    }

    onViewMemo(transfernumber: string) {
        const img_url =
            'http://www.ap-ir.com/WebSalesReport/Forms/WF_Print_Form_Viewer.aspx?PFID=PF_TR_009_1&PFName=PF_TR_009_1.rpt&ParaName=@TransferNumber&ParaValue=' +
            transfernumber +
            '&ExtraQueryString=%7C@NitiBankName*%7C@NitiBankType*1%7C@NitiBankNo*%7C@CustomerBankName*%7C@CustomerBankType*1%7C@CustomerBankNo*%7C@ContactID*';
        window.open(img_url, '_blank');
    }

    onPrintPdf(hyrf: CrmContactRefund) {
        // console.log(hyrf);
        const img_url = hyrf.doc_merge_url;
        window.open(img_url, '_blank');
    }
}
