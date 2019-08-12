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

@NgModule({
  declarations: [Ac01viewPageComponent],
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
  ]
})
export class Ac01viewPageModule { }
