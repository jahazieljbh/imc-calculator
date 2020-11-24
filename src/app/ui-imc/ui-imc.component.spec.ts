import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { UiImcComponent } from './ui-imc.component';
import { FormsModule } from '@angular/forms';

describe('UiImcComponent', () => {
  let component: UiImcComponent;
  let fixture: ComponentFixture<UiImcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiImcComponent ]
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
});
