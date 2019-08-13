import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { CrmcontactrefundService } from 'src/app/shared/services';

import { MatTableDataSource, MatSort, MatDialog, MatDialogConfig, MatSnackBar, MatPaginator } from '@angular/material';
import { CrmContactRefund } from 'src/app/shared';
import { Ac01edit01PageComponent } from './ac01edit01-page/ac01edit01-page.component';

@Component({
    selector: 'app-ac01view-page',
    templateUrl: './ac01view-page.component.html',
    styleUrls: ['./ac01view-page.component.scss'],
    animations: [routerTransition()]
})
export class Ac01viewPageComponent implements OnInit {
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
        'tf01_appv_flag'
    ];

    @ViewChild(MatSort, null) sort: MatSort;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    ngOnInit() {
        this.refreshDataList();
    }

    refreshDataList() {
        this.service.getRefundList().subscribe(data => {
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
        this.dialog.open(Ac01edit01PageComponent, dialogConfig);
    }

    onView(id: number) {
        console.log(id);
        this.snackBar.open('View ' + id, '', {
            duration: 3000
        });
        // window.open('google.com', '_blank');
    }
}
