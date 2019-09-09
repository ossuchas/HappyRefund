import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ac01viewPageRoutingModule } from './ac01view-page-routing.module';
import { Ac01viewPageComponent } from './ac01view-page.component';

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
import { Ac01edit01PageComponent } from './ac01edit01-page/ac01edit01-page.component';
import { Ac01imgviewPageComponent } from './ac01imgview-page/ac01imgview-page.component';

@NgModule({
  declarations: [Ac01viewPageComponent, Ac01edit01PageComponent, Ac01imgviewPageComponent, Ac01docstatusPipe],
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
    entryComponents: [Ac01edit01PageComponent, Ac01imgviewPageComponent]
})
export class Ac01viewPageModule { }
