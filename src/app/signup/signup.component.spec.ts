import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { SignupComponent } from './signup.component';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
      imports: [
        HttpClientModule,
        AppRoutingModule,
        FormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should set name model through ngModel signup', async () => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('.name')).nativeElement;
    // Act 
    inputElement.value = 'jahaziel';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    // Assert 
    expect(component.name).toEqual('jahaziel');
  });

  it('Should set username model through ngModel signup', async () => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('.username')).nativeElement;
    // Act 
    inputElement.value = 'jahazieljbh';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    // Assert 
    expect(component.username).toEqual('jahazieljbh');
  });

  it('Should set email model through ngModel signup', async () => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('.email')).nativeElement;
    // Act 
    inputElement.value = 'jahazieljbh@gmail.com';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    // Assert 
    expect(component.email).toEqual('jahazieljbh@gmail.com');
  });

  it('Should set password model through ngModel signup', async () => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('.password')).nativeElement;
    // Act 
    inputElement.value = '123456789';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    // Assert 
    expect(component.password).toEqual('123456789');
  });

  it('Deberia registrar si tiene los campos llenos', () => {

    // Arrange
    let res;
    component.name = 'jahaziel';
    component.username = 'jahazieljbh';
    component.email= 'jahaziel@gmail.com';
    component.role = ['user']
    component.password='123456789';
    // Act
    component.registar();
    res = component.result;

    // Assert
    expect(res).toBe('success');
  });

  it('No Deberia registrar si no tiene los campos llenos ', () => {

    // Arrange
    let res;
    component.name = '';
    component.username = '';
    component.email= '';
    component.password= '';
    // Act
    component.registar();
    res = component.result;
    
    // Assert
    expect(res).toBe('isEmpty');
  });

});
