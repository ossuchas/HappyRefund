import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgreviewPageRoutingModule } from './agreview-page-routing.module';
import { AgreviewPageComponent } from './agreview-page.component';
import { PageHeaderModule, Tf01docstatusPipe} from 'src/app/shared';
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
import { Agedit01PageComponent } from './agedit01-page/agedit01-page.component';
import { AgimgviewPageComponent } from './agimgview-page/agimgview-page.component';

@NgModule({
    imports: [
        CommonModule,
        AgreviewPageRoutingModule,
        PageHeaderModule,
        MatInputModule,
        MatTableModule,
        MatCardModule,
        MatPaginatorModule,
        MatDialogModule,
        MatSortModule,
        MatSnackBarModule,
        MatIconModule,
        MatButtonModule,
        MatDatepickerModule,
        MatNativeDateModule,
        FormsModule,
        MatRadioModule
    ],
    declarations: [AgreviewPageComponent, Agedit01PageComponent, Tf01docstatusPipe, AgimgviewPageComponent],
    entryComponents: [Agedit01PageComponent, AgimgviewPageComponent]
})
export class AgreviewPageModule {}
