import { Component, OnInit } from '@angular/core';
import {calcularIMC} from '../hombre/hombre';
import {diagnosticoHombre} from '../hombre/hombre';
import {diagnosticoMujer} from '../mujer/mujer';

@Component({
  selector: 'app-ui-imc',
  templateUrl: './ui-imc.component.html',
  styleUrls: ['./ui-imc.component.css']
})
export class UiImcComponent implements OnInit {

  constructor() { }

  result = '';
  result2='';
  estatura = 0;
  peso = 0;
  edad = 0;
  genero='';

  ngOnInit(): void {
  }

  calcularIMC(){
    let Resultado = '';
    let myresult = 0;
    let myresultTxt = '';
    myresult = calcularIMC(this.peso, this.estatura);
    if(this.genero=='hombre'){
      myresultTxt = diagnosticoHombre(this.edad, myresult);
    }else if (this.genero=='mujer'){
      myresultTxt = diagnosticoMujer(this.edad, myresult);
    }else{
      myresultTxt='INVALIDO';
    }
    Resultado = `IMC: ${myresult.toFixed(2)}\nDiagnostico: ${myresultTxt}`
    this.result = Resultado;
  }

}
