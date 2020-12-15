import { Component, OnInit } from '@angular/core';

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
  role = '';
  password = '';

  constructor() { }

  ngOnInit(): void {
  }

  registar(){
    
  }
}
