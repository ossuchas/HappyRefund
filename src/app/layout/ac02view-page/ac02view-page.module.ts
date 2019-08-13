import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ac02viewPageRoutingModule } from './ac02view-page-routing.module';
import { Ac02viewPageComponent } from './ac02view-page.component';

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
import { Ac02edit01PageComponent } from './ac02edit01-page/ac02edit01-page.component';

@NgModule({
  declarations: [Ac02viewPageComponent, Ac02edit01PageComponent],
  imports: [
    CommonModule,
    Ac02viewPageRoutingModule,
    PageHeaderModule,
    FormsModule,
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
  ],
    entryComponents: [Ac02edit01PageComponent]
})
export class Ac02viewPageModule { }
