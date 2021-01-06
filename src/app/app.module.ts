import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { UiImcComponent } from './ui-imc/ui-imc.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { StorageService } from "../services/storage.service";
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { UsersService } from "../services/users.service";
import { HistorialComponent } from './historial/historial.component'

import { NgxPaginationModule } from 'ngx-pagination';
import { ImcService } from 'src/services/imc.service';
import { GraficaComponent } from './grafica/grafica.component';

@NgModule({
  declarations: [
    AppComponent,
    UiImcComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    HomeComponent,
    HistorialComponent,
    GraficaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [StorageService, UsersService, ImcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
