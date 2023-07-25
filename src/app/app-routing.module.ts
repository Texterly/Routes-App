import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { LoginComponent } from './core/components/login/login.component';
import { Page1Component } from './core/components/page1/page1.component';
import { Page2Component } from './core/components/page2/page2.component';
import { SignInComponent } from './core/components/sign-in/sign-in.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'page1', component: Page1Component},
  {path: 'page2', component: Page2Component},
  {path: 'sgnIn', component: SignInComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
