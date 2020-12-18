import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { UserApi } from "../../models/usersapi";
import { StorageService } from "../../services/storage.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  result = '';
  username = '';
  password = '';

  constructor(
    private ruta: Router,
    private usersService: UsersService,
    private storageService: StorageService) { 
    }

  ngOnInit(): void {
  }

  logIn() {
    var mydata = new UserApi;

    if (this.username == "" || this.password == "") {
      this.result = 'failed';
      alert('USUARIO Y CONTRASEÑA REQUERIDOS');
      this.ruta.navigate(['']);
    } else {

      mydata.username = this.username;
      mydata.password = this.password;

      this.usersService.loginUser(mydata)
        .subscribe((data: any) => {
          this.storageService.setLocal("token", data.accessToken);
        });
        alert('Bienvenido '+ this.username );
        this.result = 'success';
        this.ruta.navigate(['imc']);
    }
  }
}
