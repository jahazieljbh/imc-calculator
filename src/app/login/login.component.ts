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
      if(usersService.isUserLoggedIn){
        this.ruta.navigate(["login"]);
      }else{
        this.ruta.navigate([""])
      }
    }

  ngOnInit(): void {
  }

  logIn() {
    let myresult = 'token here !!!';
    var mydata = new UserApi;

    if (this.username == "" || this.password == "") {

      alert('USUARIO Y CONTRASEÑA REQUERIDOS');
      this.result = 'invalido';
    } else {

      mydata.username = this.username;
      mydata.password = this.password;

      return this.usersService.loginUser(mydata)
        .subscribe((data: any) => {

          this.storageService.setLocal("token", data.accessToken);
          this.result = data.accessToken;
          alert('Bienvenido '+ this.username );

        });
    }
    this.result = myresult;
  }
}
