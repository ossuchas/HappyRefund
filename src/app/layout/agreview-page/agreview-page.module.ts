
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgreviewPageRoutingModule } from './agreview-page-routing.module';
import { AgreviewPageComponent } from './agreview-page.component';
import { PageHeaderModule } from 'src/app/shared';

@NgModule({
    imports: [CommonModule, AgreviewPageRoutingModule, PageHeaderModule],
    declarations: [AgreviewPageComponent]
})
export class AgreviewPageModule {}
