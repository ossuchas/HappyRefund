import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Aa00viewPageComponent } from './aa00view-page.component';

const routes: Routes = [
    {
        path: '',
        component: Aa00viewPageComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Aa00viewPageRoutingModule { }
