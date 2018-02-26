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

  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'plan', component: PlanComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'search', component: SearchComponent},
  {path: 'mytrips', component: MytripsComponent},


  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
