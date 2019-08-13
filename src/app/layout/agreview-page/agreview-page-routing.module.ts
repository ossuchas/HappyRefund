
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgreviewPageComponent } from './agreview-page.component';

const routes: Routes = [
    {
        path: '',
        component: AgreviewPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AgreviewPageRoutingModule {}
