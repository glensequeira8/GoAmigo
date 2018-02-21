import {ModuleWithProviders} from '@angular/core';
import {Route, RouterModule,Routes } from '@angular/router';
import {AppComponent}  from './app.component';
import {PlanTripComponent}  from './plan-trip/plan-trip.component';
import {SearchComponent}  from './search/search.component';

export const router: Routes= [
    {path:'',redirectTo:'about', pathMatch: 'full'},
    { path:'plan',component:PlanTripComponent},
    { path:'search',component:SearchComponent}
]
export const routes: ModuleWithProviders=RouterModule.forRoot(router);