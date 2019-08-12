import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ac01viewPageComponent } from './ac01view-page.component';

const routes: Routes = [
    {
        path: '',
        component: Ac01viewPageComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Ac01viewPageRoutingModule { }
