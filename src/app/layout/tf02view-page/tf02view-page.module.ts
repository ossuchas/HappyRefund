import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Tf02viewPageRoutingModule } from './tf02view-page-routing.module';
import { Tf02viewPageComponent } from './tf02view-page.component';

import { PageHeaderModule, Tf02docstatusPipe } from 'src/app/shared';
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
import { Tf02edit01PageComponent } from './tf02edit01-page/tf02edit01-page.component';
import { Tf02imgviewPageComponent } from './tf02imgview-page/tf02imgview-page.component';

@NgModule({
  declarations: [Tf02viewPageComponent, Tf02edit01PageComponent, Tf02imgviewPageComponent, Tf02docstatusPipe],
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
  ],
    entryComponents: [Tf02edit01PageComponent, Tf02imgviewPageComponent]

})
export class Tf02viewPageModule { }
