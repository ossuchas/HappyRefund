import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Aa00viewPageRoutingModule } from './aa00view-page-routing.module';
import { Aa00viewPageComponent } from './aa00view-page.component';

import { PageHeaderModule, Ac01docstatusPipe } from 'src/app/shared';
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
  declarations: [Aa00viewPageComponent],
  imports: [
    CommonModule,
    Aa00viewPageRoutingModule,
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
export class Aa00viewPageModule { }
