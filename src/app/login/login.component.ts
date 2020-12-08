import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { UserApi } from "../../models/usersapi";
import { StorageService } from "../../services/storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  result = '';
  username = '';
  password = '';

  constructor(private usersService: UsersService,
    private storageService: StorageService) { }

  ngOnInit(): void {
  }

  addition() {
    let myresult = 'token here !!!';

    var mydata = new UserApi;

    if (this.username == "" || this.password == "") {

      alert('USUARIO Y CONTRASEÑA REQUERIDOS');

    } else {

      mydata.username = this.username;
      mydata.password = this.password;

      return this.usersService.loginUser(mydata)
        .subscribe((data: any) => {

          this.storageService.setLocal("token", data.accessToken);
          this.result = data.accessToken;
          alert(data.accessToken);

        })

    }

    this.result = myresult;
  }
}
