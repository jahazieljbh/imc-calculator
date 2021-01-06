import { Component, OnInit } from '@angular/core';
import { ImcService } from "../../services/imc.service"
import { ImcApi } from "../../models/imcapi";

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  imcs: ImcApi[];
  actual: number = 1;
  constructor(private imcService : ImcService) { }

  ngOnInit(): void {
    this.imcService.getHistorial().subscribe((data)=>{
      this.imcs = data['content'];
      console.log(data);
    },
    err => {
      console.log(err);
    })
  }

}
