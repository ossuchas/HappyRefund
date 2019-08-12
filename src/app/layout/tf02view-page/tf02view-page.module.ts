import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Tf02viewPageRoutingModule } from './tf02view-page-routing.module';
import { Tf02viewPageComponent } from './tf02view-page.component';

import { PageHeaderModule } from 'src/app/shared';
import { FormsModule } from '@angular/forms';

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
    MatPaginatorModule,
    MatRadioModule
} from '@angular/material';

@NgModule({
  declarations: [Tf02viewPageComponent],
  imports: [
    CommonModule,
    Tf02viewPageRoutingModule,
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
    MatPaginatorModule,
    MatRadioModule,
    PageHeaderModule,
    FormsModule
  ]
})
export class Tf02viewPageModule { }
