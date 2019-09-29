import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ac03viewPageRoutingModule } from './ac03view-page-routing.module';
import { Ac03viewPageComponent } from './ac03view-page.component';

import { PageHeaderModule} from 'src/app/shared';
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
import { NgbModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { Ac03edit01PageComponent } from './ac03edit01-page/ac03edit01-page.component';

@NgModule({
  declarations: [Ac03viewPageComponent, Ac03edit01PageComponent],
  imports: [
    CommonModule,
    Ac03viewPageRoutingModule,
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
    MatRadioModule,
    NgbModule,
    NgbDatepickerModule
  ],
    entryComponents: [Ac03edit01PageComponent]
})
export class Ac03viewPageModule { }
