import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { User } from './shared/user.model';
import { SignInComponent } from './layout/user/sign-in/sign-in.component';
import { SignUpComponent } from './layout/user/sign-up/sign-up.component';
import { UserProfileComponent } from './layout/user/user-profile/user-profile.component';
import { UserComponent } from './layout/user/user.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path:'',redirectTo:'/home',pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: UserComponent, children: [{ path: '', component: SignUpComponent }] },
  { path: 'login', component: UserComponent, children: [{ path: '', component: SignInComponent }] },
  { path: 'userprofile', component: UserProfileComponent,canActivate:[AuthGuard] },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'product', component: ProductComponent },
  {path:'cart', component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
