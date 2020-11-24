import {calcularIMC} from './hombre';
import {diagnosticoHombre} from './hombre';

describe('Hombre - IMC - unit tests', () => {
  it('Should calculate IMC of 75kg y 170cm = 25.95 imc ', () => {
    //Arrangin
    let result =0;
    //Act
    result = calcularIMC(75.0,170.0);
    //Assert
    expect(result).toBe(25.95);
 });

 it('Should calculate IMC of 55kg y 160cm = 21.48 imc', () => {
   //Arrangin
   let result =0;
   //Act
   result = calcularIMC(55,160);
   //Assert
   expect(result).toBe(21.48);
 });
 
 it('Should calculate IMC of 52kg y 169cm = 18.20 imc', () => {
   //Arrangin
   let result =0;
   //Act
   result = calcularIMC(52,169);
   //Assert
   expect(result).toBe(18.21);
 });

 it('Should calculate IMC of 50kg y 180cm = 15.42 imc', () => {
  //Arrangin
  let result =0;
  //Act
  result = calcularIMC(50,180);
  //Assert
  expect(result).toBe(15.43);
});

it('Should calculate IMC of 90kg y 160cm = 35.16 imc', () => {
  //Arrangin
  let result =0;
  //Act
  result = calcularIMC(90,160);
  //Assert
  expect(result).toBe(35.16);
});

it('Should calculate IMC of 40kg y 156cm = 16.44 imc', () => {
    //Arrangin
    let result =0;
    //Act
    result = calcularIMC(40,156);
    //Assert
    expect(result).toBe(16.44);
  });

  it('Should calculate IMC of 77kg y 177cm = 24.58 imc', () => {
    //Arrangin
    let result =0;
    //Act
    result = calcularIMC(77,177);
    //Assert
    expect(result).toBe(24.58);
  });

  it('Should calculate IMC of 100kg y 187cm = 28.6 imc', () => {
    //Arrangin
    let result =0;
    //Act
    result = calcularIMC(100,187);
    //Assert
    expect(result).toBe(28.6);
  });  

  it('Should calculate IMC of 45kg y 149cm = 20.27 imc', () => {
    //Arrangin
    let result =0;
    //Act
    result = calcularIMC(45,149);
    //Assert
    expect(result).toBe(20.27);
  }); 

  it('Should calculate IMC of 110kg y 195cm = 28.93 imc', () => {
    //Arrangin
    let result =0;
    //Act
    result = calcularIMC(110,195);
    //Assert
    expect(result).toBe(28.93);
  }); 


});

describe('Hombre - Text - unit tests', () => {
  it('Should print "Usted tiene bajo peso" when edad=5 and IMC=10', () => {
    //Arrangin
    let result ='';
    //Act
    result = diagnosticoHombre(5,10);
    //Assert
    expect(result).toBe("Usted tiene bajo peso");
 });

 it('Should print "Usted tiene obesidad tipo I" when edad=21 and IMC=32', () => {
  //Arrangin
  let result ='';
  //Act
  result = diagnosticoHombre(21,32);
  //Assert
  expect(result).toBe("Usted tiene obesidad tipo I");
});

it('Should print "Usted tiene un peso normal" when edad=15 and IMC=21', () => {
  //Arrangin
  let result ='';
  //Act
  result = diagnosticoHombre(15,21);
  //Assert
  expect(result).toBe("Usted tiene un peso normal");
});

it('Should print "Usted tiene un peso normal" when edad=10 and IMC=17', () => {
  //Arrangin
  let result ='';
  //Act
  result = diagnosticoHombre(10,17);
  //Assert
  expect(result).toBe("Usted tiene un peso normal");
});

it('Should print "Usted tiene obesidad tipo II" when edad=20 and IMC=37', () => {
    //Arrangin
    let result ='';
    //Act
    result = diagnosticoHombre(20,37);
    //Assert
    expect(result).toBe("Usted tiene obesidad tipo II");
  });

  it('Should print "Usted tiene obesidad tipo III" when edad=30 and IMC=45', () => {
    //Arrangin
    let result ='';
    //Act
    result = diagnosticoHombre(30,45);
    //Assert
    expect(result).toBe("Usted tiene obesidad tipo III");
  });

  it('Should print "Usted tiene sobrepeso" when edad=46 and IMC=27', () => {
    //Arrangin
    let result ='';
    //Act
    result = diagnosticoHombre(46,27);
    //Assert
    expect(result).toBe("Usted tiene sobrepeso");
  });

  it('Should print "Usted tiene obesidad" when edad=13 and IMC=32', () => {
    //Arrangin
    let result ='';
    //Act
    result = diagnosticoHombre(13,32);
    //Assert
    expect(result).toBe("Usted tiene obesidad");
  });

  it('Should print "Usted tiene un peso normal" when edad=55 and IMC=22', () => {
    //Arrangin
    let result ='';
    //Act
    result = diagnosticoHombre(55,22);
    //Assert
    expect(result).toBe("Usted tiene un peso normal");
  });

  it('Should print "Usted tiene un peso normal" when edad=62 and IMC=21.3', () => {
    //Arrangin
    let result ='';
    //Act
    result = diagnosticoHombre(62,21.3);
    //Assert
    expect(result).toBe("Usted tiene un peso normal");
  });


});