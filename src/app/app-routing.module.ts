import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { CarrierDashboardComponent } from './carrier-dashboard/carrier-dashboard.component';
import { CreateOrderComponent } from './create-order/create-order.component';

const routes: Routes = [
  {path: 'user-auth', component:UserAuthComponent},
  {path: 'order', component:CarrierDashboardComponent},
  {path: 'createOrder', component:CreateOrderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
