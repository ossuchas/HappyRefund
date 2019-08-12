import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsModule) },
            { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
            { path: 'forms', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
            { path: 'bs-element', loadChildren: () => import('./bs-element/bs-element.module').then(m => m.BsElementModule) },
            { path: 'grid', loadChildren: () => import('./grid/grid.module').then(m => m.GridModule) },
            { path: 'components', loadChildren: () => import('./bs-component/bs-component.module').then(m => m.BsComponentModule) },
            { path: 'blank-page', loadChildren: () => import('./blank-page/blank-page.module').then(m => m.BlankPageModule) },
            { path: 'agreview-page', loadChildren: () => import('./agreview-page/agreview-page.module').then(m => m.AgreviewPageModule) },
            { path: 'tf02view-page', loadChildren: () => import('./tf02view-page/tf02view-page.module').then(m => m.Tf02viewPageModule) },
            { path: 'ac01view-page', loadChildren: () => import('./ac01view-page/ac01view-page.module').then(m => m.Ac01viewPageModule) },
            { path: 'ac02view-page', loadChildren: () => import('./ac02view-page/ac02view-page.module').then(m => m.Ac02viewPageModule) }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
