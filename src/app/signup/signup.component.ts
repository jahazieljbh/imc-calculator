import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { User } from "../../models/user";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  result = '';
  name = '';
  username = '';
  email = '';
  role: string[] = [];
  password = '';
  mydata: User;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = false;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  registar() {
    this.mydata = new User(this.name, this.username, this.email, this.password);
    this.mydata.role = ['user'];
    if (this.name == "" || this.username == "" || this.email == "" || this.password == "") {
      this.result = 'isEmpty';
      alert('CAMPOS REQUERIDOS');
    } else {
      this.usersService.registrar(this.mydata)
        .subscribe((data: any) => {
          console.log(data);
          this.isSignedUp = true;
          this.isSignUpFailed = false;
        },
          error => {
            this.errorMessage = error.error.message;
            this.isSignUpFailed = true;
            this.result = 'failed';
          });
        this.result = 'success';
    }
  }
}
