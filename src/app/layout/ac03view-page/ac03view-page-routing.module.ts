import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ac03viewPageComponent } from './ac03view-page.component';

const routes: Routes = [
    {
        path: '',
        component: Ac03viewPageComponent
    }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Ac03viewPageRoutingModule { }
