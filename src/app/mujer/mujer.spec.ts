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
    let result = '';
    //Act
    result = diagnosticoMujer(10, 13.12);
    //Assert
    expect(result).toBe("Usted tiene bajo peso");
  });

  it('Should print "Usted tiene un peso normal" when edad=10 and IMC=18.52', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoMujer(10, 18.52);
    //Assert
    expect(result).toBe("Usted tiene un peso normal");
  });

  it('Should print "Usted tiene obesidad" when edad=10 and IMC=23', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoMujer(10, 23);
    //Assert
    expect(result).toBe("Usted tiene obesidad");
  });

  it('Should print "Usted tiene sobrepeso" when edad=10 and IMC=19', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoMujer(10, 19);
    //Assert
    expect(result).toBe("Usted tiene sobrepeso");
  });

  it('Should print "Usted tiene bajo peso" when edad=11 and IMC=13.5', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoMujer(11, 13.5);
    //Assert
    expect(result).toBe("Usted tiene bajo peso");
  });
  it('Should print "Usted tiene un peso normal" when edad=11 and IMC=15.69', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoMujer(11, 15.59);
    //Assert
    expect(result).toBe("Usted tiene un peso normal");
  });

  it('Should print "Usted tiene sobrepeso" when edad=11 and IMC=21', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoMujer(11, 21);
    //Assert
    expect(result).toBe("Usted tiene sobrepeso");
  });


  it('Should print "Usted tiene obesidad" when edad=11 and IMC=25', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoMujer(11, 25);
    //Assert
    expect(result).toBe("Usted tiene obesidad");
  });

  it('Should print "Usted tiene bajo peso" when edad=12 and IMC=13.9', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoMujer(12, 13.9);
    //Assert
    expect(result).toBe("Usted tiene bajo peso");
  });

  it('Should print "Usted tiene un peso normal" when edad=12 and IMC=17.15', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoMujer(12, 17.15);
    //Assert
    expect(result).toBe("Usted tiene un peso normal");
  });

  it('Should print "Usted tiene sobrepeso" when edad=12 and IMC=24', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoMujer(12, 24);
    //Assert
    expect(result).toBe("Usted tiene sobrepeso");
  });

  it('Should print "Usted tiene obesidad" when edad=12 and IMC=26', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoMujer(12, 26);
    //Assert
    expect(result).toBe("Usted tiene obesidad");
  });

  it('Should print "Usted tiene bajo peso" when edad=13 and IMC=12.9', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoMujer(13, 12.9);
    //Assert
    expect(result).toBe("Usted tiene bajo peso");
  });

  it('Should print "Usted tiene un peso normal" when edad=13 and IMC=20', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoMujer(13, 20);
    //Assert
    expect(result).toBe("Usted tiene un peso normal");
  });

  it('Should print "Usted tiene sobrepeso" when edad=13 and IMC=24.1', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoMujer(13, 24.1);
    //Assert
    expect(result).toBe("Usted tiene sobrepeso");
  });

  it('Should print "Usted tiene obesidad" when edad=13 and IMC=26.5', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoMujer(13, 26.5);
    //Assert
    expect(result).toBe("Usted tiene obesidad");
  });

  it('Should print "Usted tiene bajo peso" when edad=14 and IMC=15', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoMujer(14, 15);
    //Assert
    expect(result).toBe("Usted tiene bajo peso");
  });

  it('Should print "Usted tiene un peso normal" when edad=14 and IMC=19.3', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoMujer(14, 19.3);
    //Assert
    expect(result).toBe("Usted tiene un peso normal");
  });

  it('Should print "Usted tiene sobrepeso" when edad=14 and IMC=27', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoMujer(14, 27);
    //Assert
    expect(result).toBe("Usted tiene sobrepeso");
  });

  it('Should print "Usted tiene obesidad" when edad=14 and IMC=28', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoMujer(14, 28);
    //Assert
    expect(result).toBe("Usted tiene obesidad");
  });

  it('Should print "Usted tiene bajo peso" when edad=15 and IMC=14.52', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoMujer(15, 14.52);
    //Assert
    expect(result).toBe("Usted tiene bajo peso");
  });

  it('Should print "Usted tiene un peso normal" when edad=15 and IMC=23', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoMujer(15, 23);
    //Assert
    expect(result).toBe("Usted tiene un peso normal");
  });

  it('Should print "Usted tiene sobrepeso" when edad=15 and IMC=26.1', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoMujer(15, 26.1);
    //Assert
    expect(result).toBe("Usted tiene sobrepeso");
  });

  it('Should print "Usted tiene obesidad" when edad=15 and IMC=29.6', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoMujer(15, 29.6);
    //Assert
    expect(result).toBe("Usted tiene obesidad");
  });

  it('Should print "Usted tiene bajo peso" when edad=16 and IMC=15', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoMujer(16, 15);
    //Assert
    expect(result).toBe("Usted tiene bajo peso");
  });

  it('Should print "Usted tiene un peso normal" when edad=16 and IMC=23.9', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoMujer(16, 23.9);
    //Assert
    expect(result).toBe("Usted tiene un peso normal");
  });

  it('Should print "Usted tiene sobrepeso" when edad=16 and IMC=27.7', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoMujer(16, 27.7);
    //Assert
    expect(result).toBe("Usted tiene sobrepeso");
  });

  it('Should print "Usted tiene obesidad" when edad=16 and IMC=30', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoMujer(16, 30);
    //Assert
    expect(result).toBe("Usted tiene obesidad");
  });

  it('Should print "Usted tiene bajo peso" when edad=17 and IMC=16.4', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoMujer(17, 16.4);
    //Assert
    expect(result).toBe("Usted tiene bajo peso");
  });

  it('Should print "Usted tiene un peso normal" when edad=17 and IMC=19', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoMujer(17, 19);
    //Assert
    expect(result).toBe("Usted tiene un peso normal");
  });

  it('Should print "Usted tiene obesidad" when edad=17 and IMC=29.3', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoMujer(17, 29.3);
    //Assert
    expect(result).toBe("Usted tiene obesidad");
  });

  it('Should print "Usted tiene sobrepeso" when edad=17 and IMC=29', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoMujer(17, 29);
    //Assert
    expect(result).toBe("Usted tiene sobrepeso");
  });

  it('Should print "Usted tiene bajo peso" when edad=18 and IMC=16.4', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoMujer(18, 16.4);
    //Assert
    expect(result).toBe("Usted tiene bajo peso");
  });

  it('Should print "Usted tiene un peso normal" when edad=18 and IMC=24.7', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoMujer(18, 24.7);
    //Assert
    expect(result).toBe("Usted tiene un peso normal");
  });

  it('Should print "Usted tiene obesidad" when edad=18 and IMC=29.5', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoMujer(18, 29.5);
    //Assert
    expect(result).toBe("Usted tiene obesidad");
  });

  it('Should print "Usted tiene sobrepeso" when edad=18 and IMC=29.1', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoMujer(18, 29.1);
    //Assert
    expect(result).toBe("Usted tiene sobrepeso");
  });

  it('Should print "Usted tiene bajo peso" when edad=19 and IMC=16.5', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoMujer(19, 16.5);
    //Assert
    expect(result).toBe("Usted tiene bajo peso");
  });

  it('Should print "Usted tiene un peso normal" when edad=19 and IMC=24.9', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoMujer(19, 24.9);
    //Assert
    expect(result).toBe("Usted tiene un peso normal");
  });

  it('Should print "Usted tiene obesidad" when edad=19 and IMC=29.7', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoMujer(19, 29.7);
    //Assert
    expect(result).toBe("Usted tiene obesidad");
  });

  it('Should print "Usted tiene sobrepeso" when edad=19 and IMC=27', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoMujer(19, 27);
    //Assert
    expect(result).toBe("Usted tiene sobrepeso");
  });

  it('Should print "Usted tiene bajo peso" when edad=30 and IMC=18.12', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoMujer(30, 18.12);
    //Assert
    expect(result).toBe("Usted tiene bajo peso");
  });

  it('Should print "Usted tiene un peso normal" when edad=21 and IMC=23', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoMujer(21, 23);
    //Assert
    expect(result).toBe("Usted tiene un peso normal");
  });

  it('Should print "Usted tiene sobrepeso" when edad=25 and IMC=28', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoMujer(25, 28);
    //Assert
    expect(result).toBe("Usted tiene sobrepeso");
  });

  it('Should print "Usted tiene obesidad tipo I" when edad=35 and IMC=32', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoMujer(35, 32);
    //Assert
    expect(result).toBe("Usted tiene obesidad tipo I");
  });

  it('Should print "Usted tiene obesidad tipo II" when edad=32 and IMC=37', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoMujer(32, 37);
    //Assert
    expect(result).toBe("Usted tiene obesidad tipo II");
  });

  it('Should print "Usted tiene obesidad tipo III" when edad=27 and IMC=51', () => {
    //Arrangin
    //test
    let result = '';
    //Act
    result = diagnosticoMujer(27, 51);
    //Assert
    expect(result).toBe("Usted tiene obesidad tipo III");
  });


});