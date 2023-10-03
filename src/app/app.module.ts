import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { CarrierDashboardComponent } from './carrier-dashboard/carrier-dashboard.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateOrderComponent } from './create-order/create-order.component';


@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    CarrierDashboardComponent,
    UserAuthComponent,
    CreateOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
