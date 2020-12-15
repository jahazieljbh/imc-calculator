import { Component, OnInit } from '@angular/core';
import {calcularIMC} from '../hombre/hombre';
import {diagnosticoHombre} from '../hombre/hombre';
import {diagnosticoMujer} from '../mujer/mujer';
import { ImcApi } from "../../models/imcapi";
import { ImcService } from "../../services/imc.service"
import { StorageService } from "../../services/storage.service";

@Component({
  selector: 'app-ui-imc',
  templateUrl: './ui-imc.component.html',
  styleUrls: ['./ui-imc.component.css']
})
export class UiImcComponent implements OnInit {

  constructor(private imcService : ImcService,
    private storageService : StorageService
    ) { }

  result = '';
  estatura = 0;
  peso = 0;
  edad = 0;
  genero='';
  myimc = 0;
  ngOnInit(): void {
  }

  calcularIMC(){
    let Resultado = '';
    let myresultTxt = '';
    this.myimc = calcularIMC(this.peso, this.estatura);
    if(this.genero=='hombre'){
      myresultTxt = diagnosticoHombre(this.edad, this.myimc);
    }else if (this.genero=='mujer'){
      myresultTxt = diagnosticoMujer(this.edad, this.myimc);
    }else{
      myresultTxt='INVALIDO';
    }
    Resultado = `IMC: ${this.myimc.toFixed(2)}\nDiagnostico: ${myresultTxt}`
    this.result = Resultado;
  }

  saveimc() {
    var imc = new ImcApi;
    imc.iduser = 1;
    imc.imc = this.myimc;

  	return this.imcService.createImc(imc)
		 .subscribe((data: any) => {
			alert(JSON.stringify(data));

		})

  }
  

}
