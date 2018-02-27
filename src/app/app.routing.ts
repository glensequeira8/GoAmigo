import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import { ProfileComponent } from "./profile/profile.component";
import { PlanComponent } from "./plan/plan.component";
import {SearchComponent} from "./search/search.component";
import { MytripsComponent } from './mytrips/mytrips.component';


const appRoutes: Routes = [

  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

  {path: 'mytrips', component: MytripsComponent, canActivate: [AuthGuard]},
  
  {path: 'plan', component: PlanComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent},
  {path: 'search', component: SearchComponent, canActivate: [AuthGuard]},
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: '**', redirectTo: '', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(appRoutes);
