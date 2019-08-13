import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tf01docstatusPipe } from './tf01docstatus.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [Tf01docstatusPipe]
})
export class SharedPipesModule {
}
