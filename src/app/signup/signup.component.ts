import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
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
  role= ['user'];
  password = '';

  constructor(
     private router: Router,
     private usersService: UsersService) { }

  ngOnInit(): void {
  }

  registar(){

    var mydata = new User;
    
    if (this.username == "" || this.password == "" || this.name=="" || this.email=="") {
     
      alert('Ingrese Datos alos campos');
      this.result = 'failed';

    } else {
      
      mydata.name = this.name;
      mydata.username = this.username;
      mydata.email = this.email;
      mydata.role=this.role;
      mydata.password = this.password;
      
      this.usersService.registrar(mydata)
      .subscribe((data: any) => {
      })
      alert('Cuenta Creada con Exito');
      this.result = 'success';
      this.router.navigate(['login']);
    }
  }
}
