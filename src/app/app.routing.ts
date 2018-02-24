import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import { SearchComponent } from "./search/search.component";
import { ProfileComponent } from "./profile/profile.component";
import { PlanComponent} from "./plan/plan.component";


const appRoutes: Routes = [

     {path: "",
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "login",
        component: LoginComponent,
        data: {
          breadcrumb: "login"
        }
      },
      {
        path: "register",
        component: RegisterComponent,
        data: {
          breadcrumb: "register"
        }
      },
      {
        path: "search",
        component: SearchComponent
      },
      {
        path: "profile",
        component: ProfileComponent
      },
      {
        path: "plan",
        component: PlanComponent
      },
    ]
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
