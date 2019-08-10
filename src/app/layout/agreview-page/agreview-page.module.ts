
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgreviewPageRoutingModule } from './agreview-page-routing.module';
import { AgreviewPageComponent } from './agreview-page.component';
import { PageHeaderModule } from 'src/app/shared';

import {
    MatInputModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule
} from '@angular/material';



@NgModule({
    imports: [CommonModule, AgreviewPageRoutingModule, PageHeaderModule,
    MatInputModule, MatTableModule, MatCardModule, MatPaginatorModule],
    declarations: [AgreviewPageComponent]
})
export class AgreviewPageModule {}
