
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgreviewPageRoutingModule } from './agreview-page-routing.module';
import { AgreviewPageComponent } from './agreview-page.component';


@NgModule({
    imports: [CommonModule, AgreviewPageRoutingModule],
    declarations: [AgreviewPageComponent]
})
export class AgreviewPageModule {}
