import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { TestService, CrmcontactrefundService } from 'src/app/shared/services';


import {MatTableDataSource, MatSort, MatDialog, MatDialogConfig, MatSnackBar, MatPaginator} from '@angular/material';
import { Department, CrmContactRefund } from 'src/app/shared';


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
    private snackBar: MatSnackBar
    ) {
      this.service.listen().subscribe((m: any) => {
        console.log(m);
        this.refreshDepList();
      });
    }


    listData: MatTableDataSource<any>;
    // displayedColumn: string[] = ['Options', 'DepartmentID', 'DepartmentName'];
    displayedColumn: string[] = ['Options', 'project', 'unitnumber', 'transferdateapprove', 'contactid', 'fullname', 'remainingtotalamount'];

    @ViewChild(MatSort, null) sort: MatSort;
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

    ngOnInit() {
        this.refreshDepList();
    }

  refreshDepList() {
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
    dialogConfig.width = '70%';
    // this.dialog.open(EditDepComponent, dialogConfig);

  }

  onDelete(id: number) {
    console.log(id);
    // if (confirm('Are you sure to delete?')) {
    //   this.service.deleteDepartment(id).subscribe( res => {
    //     this.refreshDepList();
    //     this.snackBar.open(res['message'].toString(), '', {
    //       duration: 5000,
    //       verticalPosition: 'top'
    //     });

    //   });
    // }
  }

  onAdd() {
    console.log('onAdd()');
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '70%';
    // this.dialog.open(AddDepComponent, dialogConfig);
  }

}
