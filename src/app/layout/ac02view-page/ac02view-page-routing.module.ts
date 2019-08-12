import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ac02viewPageComponent } from './ac02view-page.component';

const routes: Routes = [
    {
        path: '',
        component: Ac02viewPageComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Ac02viewPageRoutingModule { }
