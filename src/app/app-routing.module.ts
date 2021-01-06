import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UiImcComponent } from './ui-imc/ui-imc.component';
import { HomeComponent } from './home/home.component';
import { HistorialComponent } from './historial/historial.component'
import { GraficaComponent } from './grafica/grafica.component';

const routes: Routes = [
  { path:'login', component: LoginComponent},
  { path:'signup', component: SignupComponent},
  { path:'home', component: HomeComponent},
  { path:'imc', component: UiImcComponent},
  { path:'historial', component: HistorialComponent},
  { path:'grafica', component: GraficaComponent},
  { path: '', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
