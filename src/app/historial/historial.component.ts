import { Component, OnInit } from '@angular/core';
import { ImcApi } from "../models/imcapi";
import { ImcService } from '../services/imc.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  imcs: ImcApi[];
  actual: number = 1;
  constructor(private imcService : ImcService, public usersService: UsersService) { }

  ngOnInit(): void {
    this.imcService.getHistorial().subscribe((data)=>{
      this.imcs = data['content'];
    },
    err => {
      console.log(err);
    })
  }

}
