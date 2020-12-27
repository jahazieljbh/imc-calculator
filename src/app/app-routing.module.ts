import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UiImcComponent } from './ui-imc/ui-imc.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:'login', component: LoginComponent},
  { path:'signup', component: SignupComponent},
  { path:'home', component: HomeComponent},
  { path:'imc', component: UiImcComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
