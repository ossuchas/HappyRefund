import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ac02viewPageRoutingModule } from './ac02view-page-routing.module';
import { Ac02viewPageComponent } from './ac02view-page.component';

import { PageHeaderModule, Ac02docstatusPipe } from 'src/app/shared';
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
import { Ac02imgviewPageComponent } from './ac02imgview-page/ac02imgview-page.component';
import { NgbModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [Ac02viewPageComponent, Ac02edit01PageComponent, Ac02imgviewPageComponent, Ac02docstatusPipe],
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
    MatRadioModule,
    NgbModule,
    NgbDatepickerModule
  ],
    entryComponents: [Ac02edit01PageComponent, Ac02imgviewPageComponent]
})
export class Ac02viewPageModule { }
