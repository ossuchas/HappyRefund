import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { VwCrmRefundAppv4Service } from 'src/app/shared/services';

import { MatTableDataSource, MatSort, MatDialog, MatDialogConfig, MatSnackBar, MatPaginator } from '@angular/material';
import { CrmContactRefundAppv4View } from 'src/app/shared';

@Component({
    selector: 'app-aa00view-page',
    templateUrl: './aa00view-page.component.html',
    styleUrls: ['./aa00view-page.component.scss']
})
export class Aa00viewPageComponent implements OnInit {
    constructor(private service: VwCrmRefundAppv4Service, private dialog: MatDialog, private snackBar: MatSnackBar) {
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
        'contractnumber',
        'transferdateapprove',
        'fullname',
        'remainingtotalamount',
        'approvedate4',
        'approve4by'
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
}
