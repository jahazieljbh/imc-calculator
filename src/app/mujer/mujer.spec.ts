import {calcularIMC} from './mujer';
import {diagnosticoMujer} from './mujer';

describe('Mujer - IMC - unit tests', () => {
  it('Should calculate IMC of 46kg y 163cm = 17.31 imc ', () => {
    //Arrangin
    let result =0;
    //Act
    result = calcularIMC(46,163);
    //Assert
    expect(result).toBe(17.31);
 });

 it('Should calculate IMC of 43kg y 145cm = 20.45 imc', () => {
   //Arrangin
   let result =0;
   //Act
   result = calcularIMC(43,145);
   //Assert
   expect(result).toBe(20.45);
 });
 
 it('Should calculate IMC of 50kg y 149cm = 22.52 imc', () => {
   //Arrangin
   let result =0;
   //Act
   result = calcularIMC(50,149);
   //Assert
   expect(result).toBe(22.52);
 });

 it('Should calculate IMC of 80kg y 167cm = 28.69 imc', () => {
  //Arrangin
  let result =0;
  //Act
  result = calcularIMC(80,167);
  //Assert
  expect(result).toBe(28.69);
});

it('Should calculate IMC of 47kg y 163cm = 17.69 imc', () => {
  //Arrangin
  let result =0;
  //Act
  result = calcularIMC(47,163);
  //Assert
  expect(result).toBe(17.69);
});

it('Should calculate IMC of 56kg y 160cm = 21.87 imc', () => {
    //Arrangin
    let result =0;
    //Act
    result = calcularIMC(56,160);
    //Assert
    expect(result).toBe(21.87);
  });

  it('Should calculate IMC of 75kg y 170cm = 25.95 imc', () => {
    //Arrangin
    let result =0;
    //Act
    result = calcularIMC(75,170);
    //Assert
    expect(result).toBe(25.95);
  });

  it('Should calculate IMC of 100kg y 180cm = 30.86 imc', () => {
    //Arrangin
    let result =0;
    //Act
    result = calcularIMC(100,180);
    //Assert
    expect(result).toBe(30.86);
  });  

  it('Should calculate IMC of 40kg y 139cm = 20.70 imc', () => {
    //Arrangin
    let result =0;
    //Act
    result = calcularIMC(40,139);
    //Assert
    expect(result).toBe(20.70);
  }); 

  it('Should calculate IMC of 55kg y 148cm = 25.11 imc', () => {
    //Arrangin
    let result =0;
    //Act
    result = calcularIMC(55,148);
    //Assert
    expect(result).toBe(25.11);
  }); 


});

describe('Mujer - Text - unit tests', () => {
  it('Should print "Usted tiene bajo peso" when edad=10 and IMC=13.12', () => {
    //Arrangin
    //test
    let result ='';
    //Act
    result = diagnosticoMujer(10,13.12);
    //Assert
    expect(result).toBe("Usted tiene bajo peso");
 });

 it('Should print "Usted tiene obesidad" when edad=19 and IMC=32', () => {
  //Arrangin
  let result ='';
  //Act
  result = diagnosticoMujer(19,32);
  //Assert
  expect(result).toBe("Usted tiene obesidad");
});

it('Should print "Usted tiene un peso normal" when edad=15 and IMC=18', () => {
  //Arrangin
  let result ='';
  //Act
  result = diagnosticoMujer(15,18);
  //Assert
  expect(result).toBe("Usted tiene un peso normal");
});

it('Should print "Usted tiene sobrepeso" when edad=12 and IMC=24', () => {
  //Arrangin
  let result ='';
  //Act
  result = diagnosticoMujer(12,24);
  //Assert
  expect(result).toBe("Usted tiene sobrepeso");
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

  it('Should print "Usted tiene obesidad tipo III" when edad=43 and IMC=42', () => {
    //Arrangin
    let result ='';
    //Act
    result = diagnosticoMujer(43,42);
    //Assert
    expect(result).toBe("Usted tiene obesidad tipo III");
  });

  it('Should print "Usted tiene obesidad" when edad=13 and IMC=30', () => {
    //Arrangin
    let result ='';
    //Act
    result = diagnosticoMujer(13,30);
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