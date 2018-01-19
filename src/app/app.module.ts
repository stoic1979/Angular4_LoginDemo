import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { 
    path: '', 
    component: LoginFormComponent
  },
  { 
    path: 'dashboard', 
    component: DashboardComponent
  },
];


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    FooterComponent,
    HeaderComponent,
    DashboardComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
