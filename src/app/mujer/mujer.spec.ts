import {calcularIMC} from './mujer';
import {diagnosticoMujer} from './mujer';

describe('Mujer - IMC - unit tests', () => {
  it('Should imc 75 / (170/100)^2 = 25.95 imc ', () => {
    //Arrangin
    let result =0;
    //Act
    result = calcularIMC(75.0,170.0);
    //Assert
    expect(result).toBe(25.95);
 });

 it('Should imc 55 / (160/100)^2 = 21.48 imc', () => {
   //Arrangin
   let result =0;
   //Act
   result = calcularIMC(55,160);
   //Assert
   expect(result).toBe(21.48);
 });
 
 it('Should imc 52 / (169/100)^2 = 18.20 imc', () => {
   //Arrangin
   let result =0;
   //Act
   result = calcularIMC(52,169);
   //Assert
   expect(result).toBe(18.21);
 });

 it('Should imc 50 / (180/100)^2 = 15.42 imc', () => {
  //Arrangin
  let result =0;
  //Act
  result = calcularIMC(50,180);
  //Assert
  expect(result).toBe(15.43);
});

it('Should imc 90 / (160/100)^2 = 35.16 imc', () => {
  //Arrangin
  let result =0;
  //Act
  result = calcularIMC(90,160);
  //Assert
  expect(result).toBe(35.16);
});

it('Should imc 40 / (156/100)^2 = 16.44 imc', () => {
    //Arrangin
    let result =0;
    //Act
    result = calcularIMC(40,156);
    //Assert
    expect(result).toBe(16.44);
  });

  it('Should imc 77 / (177/100)^2 = 24.58 imc', () => {
    //Arrangin
    let result =0;
    //Act
    result = calcularIMC(77,177);
    //Assert
    expect(result).toBe(24.58);
  });

  it('Should imc 100 / (187/100)^2 = 28.6 imc', () => {
    //Arrangin
    let result =0;
    //Act
    result = calcularIMC(100,187);
    //Assert
    expect(result).toBe(28.6);
  });  

  it('Should imc 45 / (149/100)^2 = 20.27 imc', () => {
    //Arrangin
    let result =0;
    //Act
    result = calcularIMC(45,149);
    //Assert
    expect(result).toBe(20.27);
  }); 

  it('Should imc 110 / (195/100)^2 = 28.93 imc', () => {
    //Arrangin
    let result =0;
    //Act
    result = calcularIMC(110,195);
    //Assert
    expect(result).toBe(28.93);
  }); 


});

describe('Mujer - Text - unit tests', () => {
  it('Should print "Usted tiene bajo peso" when edad=5 and IMC=10', () => {
    //Arrangin
    //test
    let result ='';
    //Act
    result = diagnosticoMujer(5,10);
    //Assert
    expect(result).toBe("Usted tiene bajo peso");
 });

 it('Should print "Usted tiene obesidad tipo I" when edad=21 and IMC=32', () => {
  //Arrangin
  let result ='';
  //Act
  result = diagnosticoMujer(21,32);
  //Assert
  expect(result).toBe("Usted tiene obesidad tipo I");
});

it('Should print "Usted tiene un peso normal" when edad=15 and IMC=21', () => {
  //Arrangin
  let result ='';
  //Act
  result = diagnosticoMujer(15,21);
  //Assert
  expect(result).toBe("Usted tiene un peso normal");
});

it('Should print "Usted tiene un peso normal" when edad=10 and IMC=17', () => {
  //Arrangin
  let result ='';
  //Act
  result = diagnosticoMujer(10,17);
  //Assert
  expect(result).toBe("Usted tiene un peso normal");
});

it('Should print "Usted tiene obesidad tipo II" when edad=20 and IMC=37', () => {
    //Arrangin
    let result ='';
    //Act
    result = diagnosticoMujer(20,37);
    //Assert
    expect(result).toBe("Usted tiene obesidad tipo II");
  });

  it('Should print "Usted tiene obesidad tipo III" when edad=30 and IMC=45', () => {
    //Arrangin
    let result ='';
    //Act
    result = diagnosticoMujer(30,45);
    //Assert
    expect(result).toBe("Usted tiene obesidad tipo III");
  });

  it('Should print "Usted tiene sobrepeso" when edad=46 and IMC=27', () => {
    //Arrangin
    let result ='';
    //Act
    result = diagnosticoMujer(46,27);
    //Assert
    expect(result).toBe("Usted tiene sobrepeso");
  });

  it('Should print "Usted tiene obesidad" when edad=13 and IMC=32', () => {
    //Arrangin
    let result ='';
    //Act
    result = diagnosticoMujer(13,32);
    //Assert
    expect(result).toBe("Usted tiene obesidad");
  });

  it('Should print "Usted tiene un peso normal" when edad=55 and IMC=22', () => {
    //Arrangin
    let result ='';
    //Act
    result = diagnosticoMujer(55,22);
    //Assert
    expect(result).toBe("Usted tiene un peso normal");
  });

  it('Should print "Usted tiene un peso normal" when edad=62 and IMC=21.3', () => {
    //Arrangin
    let result ='';
    //Act
    result = diagnosticoMujer(62,21.3);
    //Assert
    expect(result).toBe("Usted tiene un peso normal");
  });


});