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
  it('Should print "Usted tiene bajo peso" when edad=10 and IMC=12', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoHombre(10, 12);
    //Assert
    expect(result).toBe("Usted tiene bajo peso");
  });

  it('Should print "Usted tiene un peso normal" when edad=10 and IMC=15', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoHombre(10, 15);
    //Assert
    expect(result).toBe("Usted tiene un peso normal");
  });

  it('Should print "Usted tiene obesidad" when edad=10 and IMC=21.5', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoHombre(10, 21.5);
    //Assert
    expect(result).toBe("Usted tiene obesidad");
  });

  it('Should print "Usted tiene sobrepeso" when edad=10 and IMC=19.5', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoHombre(10, 19.5);
    //Assert
    expect(result).toBe("Usted tiene sobrepeso");
  });

  it('Should print "Usted tiene bajo peso" when edad=11 and IMC=14.1', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoHombre(11, 14.1);
    //Assert
    expect(result).toBe("Usted tiene bajo peso");
  });
  it('Should print "Usted tiene un peso normal" when edad=11 and IMC=17.3', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoHombre(11, 17.3);
    //Assert
    expect(result).toBe("Usted tiene un peso normal");
  });

  it('Should print "Usted tiene sobrepeso" when edad=11 and IMC=21', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoHombre(11, 21);
    //Assert
    expect(result).toBe("Usted tiene sobrepeso");
  });


  it('Should print "Usted tiene obesidad" when edad=11 and IMC=22.5', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoHombre(11, 22.5);
    //Assert
    expect(result).toBe("Usted tiene obesidad");
  });

  it('Should print "Usted tiene bajo peso" when edad=12 and IMC=14.5', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoHombre(12, 14.5);
    //Assert
    expect(result).toBe("Usted tiene bajo peso");
  });

  it('Should print "Usted tiene un peso normal" when edad=12 and IMC=18.6', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoHombre(12, 18.6);
    //Assert
    expect(result).toBe("Usted tiene un peso normal");
  });

  it('Should print "Usted tiene sobrepeso" when edad=12 and IMC=20.1', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoHombre(12, 20.1);
    //Assert
    expect(result).toBe("Usted tiene sobrepeso");
  });

  it('Should print "Usted tiene obesidad" when edad=12 and IMC=23.6', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoHombre(12, 23.6);
    //Assert
    expect(result).toBe("Usted tiene obesidad");
  });

  it('Should print "Usted tiene bajo peso" when edad=13 and IMC=14.9', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoHombre(13, 14.9);
    //Assert
    expect(result).toBe("Usted tiene bajo peso");
  });

  it('Should print "Usted tiene un peso normal" when edad=13 and IMC=15.9', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoHombre(13, 15.9);
    //Assert
    expect(result).toBe("Usted tiene un peso normal");
  });

  it('Should print "Usted tiene sobrepeso" when edad=13 and IMC=24.2', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoHombre(13, 24.2);
    //Assert
    expect(result).toBe("Usted tiene sobrepeso");
  });

  it('Should print "Usted tiene obesidad" when edad=13 and IMC=24.8', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoHombre(13, 24.8);
    //Assert
    expect(result).toBe("Usted tiene obesidad");
  });

  it('Should print "Usted tiene bajo peso" when edad=14 and IMC=15.5', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoHombre(14, 15.5);
    //Assert
    expect(result).toBe("Usted tiene bajo peso");
  });

  it('Should print "Usted tiene un peso normal" when edad=14 and IMC=18.3', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoHombre(14, 18.3);
    //Assert
    expect(result).toBe("Usted tiene un peso normal");
  });

  it('Should print "Usted tiene sobrepeso" when edad=14 and IMC=22.9', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoHombre(14, 22.9);
    //Assert
    expect(result).toBe("Usted tiene sobrepeso");
  });

  it('Should print "Usted tiene obesidad" when edad=14 and IMC=25.9', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoHombre(14, 25.9);
    //Assert
    expect(result).toBe("Usted tiene obesidad");
  });

  it('Should print "Usted tiene bajo peso" when edad=15 and IMC=16', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoHombre(15, 16);
    //Assert
    expect(result).toBe("Usted tiene bajo peso");
  });

  it('Should print "Usted tiene un peso normal" when edad=15 and IMC=21.5', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoHombre(15, 21.5);
    //Assert
    expect(result).toBe("Usted tiene un peso normal");
  });

  it('Should print "Usted tiene sobrepeso" when edad=15 and IMC=23.6', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoHombre(15, 23.6);
    //Assert
    expect(result).toBe("Usted tiene sobrepeso");
  });

  it('Should print "Usted tiene obesidad" when edad=15 and IMC=27', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoHombre(15, 27);
    //Assert
    expect(result).toBe("Usted tiene obesidad");
  });

  it('Should print "Usted tiene bajo peso" when edad=16 and IMC=16.5', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoHombre(16, 16.5);
    //Assert
    expect(result).toBe("Usted tiene bajo peso");
  });

  it('Should print "Usted tiene un peso normal" when edad=16 and IMC=20.9', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoHombre(16, 20.9);
    //Assert
    expect(result).toBe("Usted tiene un peso normal");
  });

  it('Should print "Usted tiene sobrepeso" when edad=16 and IMC=25.1', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoHombre(16, 25.1);
    //Assert
    expect(result).toBe("Usted tiene sobrepeso");
  });

  it('Should print "Usted tiene obesidad" when edad=16 and IMC=27.9', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoHombre(16, 27.9);
    //Assert
    expect(result).toBe("Usted tiene obesidad");
  });

  it('Should print "Usted tiene bajo peso" when edad=17 and IMC=16.9', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoHombre(17, 16.9);
    //Assert
    expect(result).toBe("Usted tiene bajo peso");
  });

  it('Should print "Usted tiene un peso normal" when edad=17 and IMC=17.9', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoHombre(17, 17.9);
    //Assert
    expect(result).toBe("Usted tiene un peso normal");
  });

  it('Should print "Usted tiene obesidad" when edad=17 and IMC=28.6', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoHombre(17, 28.6);
    //Assert
    expect(result).toBe("Usted tiene obesidad");
  });

  it('Should print "Usted tiene sobrepeso" when edad=17 and IMC=25.3', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoHombre(17, 25.3);
    //Assert
    expect(result).toBe("Usted tiene sobrepeso");
  });

  it('Should print "Usted tiene bajo peso" when edad=18 and IMC=17.3', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoHombre(18, 17.3);
    //Assert
    expect(result).toBe("Usted tiene bajo peso");
  });

  it('Should print "Usted tiene un peso normal" when edad=18 and IMC=24.7', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoHombre(18, 24.7);
    //Assert
    expect(result).toBe("Usted tiene un peso normal");
  });

  it('Should print "Usted tiene obesidad" when edad=18 and IMC=29.2', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoHombre(18, 29.2);
    //Assert
    expect(result).toBe("Usted tiene obesidad");
  });

  it('Should print "Usted tiene sobrepeso" when edad=18 and IMC=28.1', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoHombre(18, 28.1);
    //Assert
    expect(result).toBe("Usted tiene sobrepeso");
  });

  it('Should print "Usted tiene bajo peso" when edad=19 and IMC=17.6', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoHombre(19, 17.6);
    //Assert
    expect(result).toBe("Usted tiene bajo peso");
  });

  it('Should print "Usted tiene un peso normal" when edad=19 and IMC=24.9', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoHombre(19, 24.9);
    //Assert
    expect(result).toBe("Usted tiene un peso normal");
  });

  it('Should print "Usted tiene obesidad" when edad=19 and IMC=29.7', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoHombre(19, 29.7);
    //Assert
    expect(result).toBe("Usted tiene obesidad");
  });

  it('Should print "Usted tiene sobrepeso" when edad=19 and IMC=26.8', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoHombre(19, 26.8);
    //Assert
    expect(result).toBe("Usted tiene sobrepeso");
  });

  it('Should print "Usted tiene bajo peso" when edad=23 and IMC=18', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoHombre(23, 18);
    //Assert
    expect(result).toBe("Usted tiene bajo peso");
  });

  it('Should print "Usted tiene un peso normal" when edad=22 and IMC=24', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoHombre(22, 24);
    //Assert
    expect(result).toBe("Usted tiene un peso normal");
  });

  it('Should print "Usted tiene sobrepeso" when edad=31 and IMC=26', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoHombre(31, 26);
    //Assert
    expect(result).toBe("Usted tiene sobrepeso");
  });

  it('Should print "Usted tiene obesidad tipo I" when edad=38 and IMC=33', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoHombre(38, 33);
    //Assert
    expect(result).toBe("Usted tiene obesidad tipo I");
  });

  it('Should print "Usted tiene obesidad tipo II" when edad=44 and IMC=38.2', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoHombre(44, 38.2);
    //Assert
    expect(result).toBe("Usted tiene obesidad tipo II");
  });

  it('Should print "Usted tiene obesidad tipo III" when edad=32 and IMC=50.6', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoHombre(27, 50.6);
    //Assert
    expect(result).toBe("Usted tiene obesidad tipo III");
  });

});