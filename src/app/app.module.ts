import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { SignupComponent } from './page/signup/signup.component';
import { AcountListComponent } from './components/acount-list/acount-list.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SignupComponent,
    AcountListComponent,
    TransactionListComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
