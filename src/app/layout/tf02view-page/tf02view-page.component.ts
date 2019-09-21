import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { CrmcontactrefundService } from 'src/app/shared/services';

import { MatTableDataSource, MatSort, MatDialog, MatDialogConfig, MatSnackBar, MatPaginator } from '@angular/material';
import { CrmContactRefund } from 'src/app/shared';
import { Tf02edit01PageComponent } from './tf02edit01-page/tf02edit01-page.component';
import { Tf02imgviewPageComponent } from './tf02imgview-page/tf02imgview-page.component';

@Component({
    selector: 'app-tf02view-page',
    templateUrl: './tf02view-page.component.html',
    styleUrls: ['./tf02view-page.component.scss'],
    animations: [routerTransition()]
})
export class Tf02viewPageComponent implements OnInit {
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
        // 'contactid',
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
        this.service.getTF01AllList().subscribe(data => {
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
        this.dialog.open(Tf02edit01PageComponent, dialogConfig);
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
        this.dialog.open(Tf02imgviewPageComponent, dialogConfig);
    }

    onViewMemo(transfernumber: string, tf02_appv_flag: string) {
        if (tf02_appv_flag === 'A') {
            const img_url =
                'http://www.ap-ir.com/WebSalesReport/Forms/WF_Print_Form_Viewer.aspx?PFID=PF_TR_009_HFA&PFName=PF_TR_009_HFA.rpt&ParaName=@TransferNumber&ParaValue=' +
                transfernumber +
                '&ExtraQueryString=%7C@NitiBankName*%7C@NitiBankType*1%7C@NitiBankNo*%7C@CustomerBankName*%7C@CustomerBankType*1%7C@CustomerBankNo*%7C@ContactID*';
            window.open(img_url, '_blank');
        } else {
            const img_url =
                'http://www.ap-ir.com/WebSalesReport/Forms/WF_Print_Form_Viewer.aspx?PFID=PF_TR_009_HF&PFName=PF_TR_009_HF.rpt&ParaName=@TransferNumber&ParaValue=' +
                transfernumber +
                '&ExtraQueryString=%7C@NitiBankName*%7C@NitiBankType*1%7C@NitiBankNo*%7C@CustomerBankName*%7C@CustomerBankType*1%7C@CustomerBankNo*%7C@ContactID*';
            window.open(img_url, '_blank');
        }
    }

    onPrintPdf(hyrf: CrmContactRefund) {
        // console.log(hyrf);
        const img_url = hyrf.doc_merge_url;
        window.open(img_url, '_blank');
    }
}
