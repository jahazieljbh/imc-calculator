import { Component, OnInit } from '@angular/core';
import { ImcApi } from "../models/imcapi";
import { Chart } from "chart.js";
import { ImcService } from '../services/imc.service';
import { UsersService } from '../services/users.service';
@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {

  chart = [];

  constructor(private imcService: ImcService, public usersService: UsersService) { }

  ngOnInit() {
    this.imcService.getGrafica().subscribe(res => {
      const id_imc = res["content"].map(res => res.id);
      const id_user = res["content"].map(res => res.iduser);
      const imc = res["content"].map(res => res.imc);
      this.chart = new Chart("canvas", {
        type: "line",
        data: {
          labels: id_imc,
          datasets: [
            {
              label: "ID_USER",
              data: id_user,
              borderColor: '#33D4F1',
              fill: false
            },
            {
              label: "IMC",
              data: imc,
              borderColor: '#F1DA33',
              fill: false
            }
          ]
        },
        options: {
          legend: {
            dispaly: false
          },
          scales: {
            xAxes: [
              {
                display: true
              }
            ],
            yAxes: [
              {
                display: true
              }
            ]
          }
        }
      });
    }, error => {
      console.log(error);
    });
  }
}
