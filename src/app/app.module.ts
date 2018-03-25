import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,Validators } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { JwtInterceptor } from './_helpers/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent} from "./register/index";
import { PlanComponent } from './plan/plan.component';
import { MytripsComponent } from './mytrips/mytrips.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { ReadJSON } from "./services/readJSON";
import { SearchComponent } from './search/search.component';
import { HttpModule} from "@angular/http";
import { MyTripsService } from "./services/mytrips.service";
import { GroupComponent } from './group/group.component';

import { NavbarComponent } from './navbar/navbar.component';
import { NavbarService } from './navbar/navbar.service';
import * as $ from 'jquery';
import { ModalComponent } from './_directives/modal.component';
import { AgmCoreModule } from '@agm/core';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { SuggestionsService } from './suggestions/suggestions.service';

//import {TabsModule} from "ng2-tabs";



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        routing,
        HttpModule,

        AgmCoreModule.forRoot({apiKey:'AIzaSyDgQfG6Y-bbidUjlgoNX8SotR2ofd2H9kA',libraries:["places"]})


  //      TabsModule        

      ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        PlanComponent,
        ProfileComponent,
        AboutComponent,
        SearchComponent,
        MytripsComponent,
        GroupComponent,
        NavbarComponent,
        ModalComponent,
        SuggestionsComponent
        

    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        ReadJSON,
        UserService,
        MyTripsService,
        NavbarService,
        SuggestionsService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
