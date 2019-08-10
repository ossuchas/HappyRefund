
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgreviewPageRoutingModule } from './agreview-page-routing.module';
import { AgreviewPageComponent } from './agreview-page.component';
import { PageHeaderModule } from 'src/app/shared';

// import {
//     MatInputModule,
//     MatTableModule,
//     MatCardModule,
//     MatPaginatorModule,
//     MatDialogModule,
//     MatSortModule,
//     MatSnackBarModule
// } from '@angular/material';

import {
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatSortModule,
    MatDialogModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatCardModule,
    MatPaginatorModule
} from '@angular/material';

@NgModule({
    imports: [CommonModule, AgreviewPageRoutingModule, PageHeaderModule,
        MatInputModule, MatTableModule, MatCardModule,
        MatPaginatorModule, MatDialogModule, MatSortModule, MatSnackBarModule,
    MatIconModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule],
    declarations: [AgreviewPageComponent]
})
export class AgreviewPageModule {}
