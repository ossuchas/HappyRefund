import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ac01viewPageRoutingModule } from './ac01view-page-routing.module';
import { Ac01viewPageComponent } from './ac01view-page.component';

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
import { Ac01edit01PageComponent } from './ac01edit01-page/ac01edit01-page.component';

@NgModule({
  declarations: [Ac01viewPageComponent, Ac01edit01PageComponent],
  imports: [
    CommonModule,
    Ac01viewPageRoutingModule,
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
    entryComponents: [Ac01edit01PageComponent]
})
export class Ac01viewPageModule { }
