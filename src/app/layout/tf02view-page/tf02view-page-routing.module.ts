import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Tf02viewPageComponent } from './tf02view-page.component';

const routes: Routes = [
    {
        path: '',
        component: Tf02viewPageComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tf02viewPageRoutingModule { }
