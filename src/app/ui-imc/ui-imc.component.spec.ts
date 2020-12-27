import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { UiImcComponent } from './ui-imc.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StorageService } from "../../services/storage.service";

describe('UiImcComponent', () => {
  let component: UiImcComponent;
  let fixture: ComponentFixture<UiImcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiImcComponent ],
      imports: [FormsModule, HttpClientModule],
      providers:[StorageService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiImcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call calcularIMC method', () => {

    // Arrange
    let result;
    component.estatura = 170;
    component.peso = 50;
    component.edad= 21;
    component.genero="hombre";
    // Act
    component.calcularIMC();
    result = component.result;

    // Assert
    expect(result).toBe('IMC: 17.30\nDiagnostico: Usted tiene bajo peso');
  });

  it('Should add estatura, peso and edad when i click the enviarDatos button ', () => {
    // Arrange 
    component.estatura = 159;
    component.peso = 50;
    component.edad= 17;
    component.genero="mujer";

    let enviarDatosButton = fixture.debugElement.query(By.css('.enviarDatos-button'));

    // Act
    enviarDatosButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result).toBe('IMC: 19.78\nDiagnostico: Usted tiene un peso normal');

  });

  it('Should set estatura model through ngModel calculaIMC', async () => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('.form-control')).nativeElement;

    // Act 
    inputElement.value = 170;
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.estatura).toEqual(170);
  });

  it('Should set peso model through ngModel calculaIMC', async () => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="peso"]')).nativeElement;

    // Act 
    inputElement.value = 60;
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.peso).toEqual(60);
  });

  it('Should set edad model through ngModel calculaIMC', async () => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="edad"]')).nativeElement;

    // Act 
    inputElement.value = 21;
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.edad).toEqual(21);
  });

  it('Should set genero model through ngModel calculaIMC', async () => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="genero"]')).nativeElement;

    // Act 
    inputElement.value = 'hombre';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.genero).toEqual('hombre');
  });
  
  it('Should add estatura, peso and edad and return INVALIDO when i click the enviarDatos button ', () => {
    // Arrange 
    component.estatura = 159;
    component.peso = 50;
    component.edad= 17;
    component.genero="xxxx";

    let enviarDatosButton = fixture.debugElement.query(By.css('.enviarDatos-button'));

    // Act
    enviarDatosButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result).toBe('IMC: 19.78\nDiagnostico: INVALIDO');

  });
});
