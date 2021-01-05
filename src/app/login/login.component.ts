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
  errorMessage = '';
  isLoginFailed = false;

  constructor(
    private ruta: Router,
    private usersService: UsersService,
    private storageService: StorageService) {
  }

  ngOnInit(): void {

  }

  logIn() {
    var mydata = new UserApi(this.username, this.password);

    if (this.username == "" || this.password == "") {
      this.result = 'isEmpty';
      alert('CAMPOS VACIOS USUARIO Y CONTRASEÑA REQUERIDOS');
    } else {

      mydata.username = this.username;
      mydata.password = this.password;

      this.usersService.loginUser(mydata)
        .subscribe(data => {
          console
          .log(data);
          this.storageService.setSession("token", data.accessToken);
          this.storageService.saveId("id", data.id);
          this.storageService.saveUsername("username", data.username);
          this.storageService.saveEmail("email", data.email);
          this.storageService.saveAuthorities("roles", data.authorities)
          this.isLoginFailed = false;
          this.ruta.navigate(['home']);
        },
        error => {
          console.log(error);
          this.errorMessage = error.error.message;
          this.isLoginFailed = true;
          this.result = 'failed'
        });
    }
  }
}
