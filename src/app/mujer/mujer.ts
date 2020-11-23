export function calcularIMC(peso,estatura){
    let IMC =0;
    let div = estatura /100;
    let mult=div * div
    IMC= peso / mult;
    return parseFloat(IMC.toFixed(2));;
  }
  export function diagnosticoMujer(edad,IMC){ 
    let resul='';
  
    if(edad <=10){
      if(IMC<=13.5){
         resul= "Usted tiene bajo peso";
      }else if(IMC >=13.5 && IMC<19){
        resul= "Usted tiene un peso normal";
      } else if(IMC>=19 && IMC<22.6){
        resul= "Usted tiene sobrepeso";
      }else{
        resul= "Usted tiene obesidad";
      }
    }else if(edad==11){
      if(IMC<=13.9){
        resul= "Usted tiene bajo peso";
     }else if(IMC >13.9 && IMC<19.9){
       resul= "Usted tiene un peso normal";
     } else if(IMC>=19.9 && IMC<23.7){
       resul= "Usted tiene sobrepeso";
     }else{
       resul= "Usted tiene obesidad";
     }
    }else if(edad==12){
      if(IMC<=14.4){
        resul= "Usted tiene bajo peso";
     }else if(IMC >14.4 && IMC<20.8){
       resul= "Usted tiene un peso normal";
     } else if(IMC>=20.8 && IMC<25){
       resul= "Usted tiene sobrepeso";
     }else{
       resul= "Usted tiene obesidad";
     }
    }else if(edad==13){
      if(IMC<=14.9){
        resul= "Usted tiene bajo peso";
     }else if(IMC >14.9 && IMC<21.8){
       resul= "Usted tiene un peso normal";
     } else if(IMC>=21.8 && IMC<26.2){
       resul= "Usted tiene sobrepeso";
     }else{
       resul= "Usted tiene obesidad";
     }
    }else if(edad==14){
      if(IMC<=15.4){
        resul= "Usted tiene bajo peso";
     }else if(IMC >15.4 && IMC<22.7){
       resul= "Usted tiene un peso normal";
     } else if(IMC>=22.7 && IMC<27.3){
       resul= "Usted tiene sobrepeso";
     }else{
       resul= "Usted tiene obesidad";
     }
    }else if(edad==15){
      if(IMC<=15.9){
        resul= "Usted tiene bajo peso";
     }else if(IMC >15.9 && IMC<23.5){
       resul= "Usted tiene un peso normal";
     } else if(IMC>=23.5 && IMC<28.2){
       resul= "Usted tiene sobrepeso";
     }else{
       resul= "Usted tiene obesidad";
     }
    }else if(edad==16){
      if(IMC<=16.2){
        resul= "Usted tiene bajo peso";
     }else if(IMC >16.2 && IMC<24.1){
       resul= "Usted tiene un peso normal";
     } else if(IMC>=24.1 && IMC<28.9){
       resul= "Usted tiene sobrepeso";
     }else{
       resul= "Usted tiene obesidad";
     }
    }else if(edad==17){
      if(IMC<=16.4){
        resul= "Usted tiene bajo peso";
     }else if(IMC >16.4 && IMC<24.5){
       resul= "Usted tiene un peso normal";
     } else if(IMC>=24.5 && IMC<29.3){
       resul= "Usted tiene sobrepeso";
     }else{
       resul= "Usted tiene obesidad";
     }
    }else if(edad==18){
      if(IMC<=16.4){
        resul= "Usted tiene bajo peso";
     }else if(IMC >16.4 && IMC<24.8){
       resul= "Usted tiene un peso normal";
     } else if(IMC>=24.8 && IMC<29.5){
       resul= "Usted tiene sobrepeso";
     }else{
       resul= "Usted tiene obesidad";
     }
    }else if(edad==19){
      if(IMC<=16.5){
        resul= "Usted tiene bajo peso";
     }else if(IMC >16.5 && IMC<25){
       resul= "Usted tiene un peso normal";
     } else if(IMC>=25 && IMC<29.7){
       resul= "Usted tiene sobrepeso";
     }else{
       resul= "Usted tiene obesidad";
     }
    }else{
      if(IMC<18.5){
        resul= "Usted tiene bajo peso";
     }else if(IMC >=18.5 && IMC<=25){
       resul= "Usted tiene un peso normal";
     } else if(IMC>25 && IMC<=30){
       resul= "Usted tiene sobrepeso";
     }else if(IMC>30 && IMC<=35){
       resul= "Usted tiene obesidad tipo I";
     }else if(IMC>35 && IMC<=40){
      resul= "Usted tiene obesidad tipo II";
     }else{
      resul= "Usted tiene obesidad tipo III";
     }
    }
  
    return resul;
    
  }