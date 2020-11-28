import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';
import { NycMapComponent } from './nyc-map/nyc-map.component';

const routes: Routes = [
    {
        path: 'nyc-map',
        component: NycMapComponent
    },
    {
        path: 'charts',
        component: ChartsComponent
    },
    {
        path: '',
        redirectTo: 'charts',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
