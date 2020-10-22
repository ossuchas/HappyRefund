import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { VwCrmRefundAppv4Service, CrmcontactrefundService } from 'src/app/shared/services';
import { CrmContactRefund } from 'src/app/shared';

import { MatTableDataSource, MatSort, MatDialog, MatDialogConfig, MatSnackBar, MatPaginator } from '@angular/material';
import { CrmContactRefundAppv4View } from 'src/app/shared';

@Component({
    selector: 'app-aa00view-page',
    templateUrl: './aa00view-page.component.html',
    styleUrls: ['./aa00view-page.component.scss']
})
export class Aa00viewPageComponent implements OnInit {
    constructor(private service: VwCrmRefundAppv4Service,
        private dialog: MatDialog,
        private snackBar: MatSnackBar,
        public serviceMaster: CrmcontactrefundService, ) {
        this.service.listen().subscribe((m: any) => {
            console.log(m);
            this.refreshDataList();
        });
    }
    listData: MatTableDataSource<any>;
    displayedColumn: string[] = [
        // 'Options',
        'project',
        'unitnumber',
        // 'contractnumber',
        'transferdateapprove',
        'fullname',
        'remainingtotalamount',
        'approvedate4',
        'approve4by',
        'refundstatus',
        'Info'
    ];

    @ViewChild(MatSort, null) sort: MatSort;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    ngOnInit() {
        this.refreshDataList();
    }

    refreshDataList() {
        this.service.getApp4List().subscribe(data => {
            this.listData = new MatTableDataSource(data);
            this.listData.paginator = this.paginator;
            this.listData.sort = this.sort;
        });
    }

    applyFilter(filtervalue: string) {
        this.listData.filter = filtervalue.trim().toLocaleLowerCase();
    }

    onView(hyrf: CrmContactRefund) {
        console.log(hyrf);
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '55%';
        // this.dialog.open(Ac02imgviewPageComponent, dialogConfig);
    }

    onPrintPdf(hyrf: CrmContactRefund) {
        console.log(hyrf);
        const img_url = hyrf.doc_merge_url;
        window.open(img_url, '_blank');
    }

    onViewMemo(transfernumber: string, hyri_id: number) {
        if (hyri_id !== 0) {
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

    openPdf(row: any) {
        console.log('row', row);
        const codeStr = row.transferid;
        this.serviceMaster.getToken().subscribe(re => {
            this.serviceMaster.exportMemoReturnCustomerSignUrl(undefined, codeStr, undefined, re.token).subscribe(data => {
                console.log('data', data);
                this.serviceMaster.openWindowWithPost(data.url, { params: data.params });
            });
        });
    }
}
