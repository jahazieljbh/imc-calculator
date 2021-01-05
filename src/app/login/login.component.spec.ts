import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';
import { StorageService } from "../../services/storage.service";
import { AppRoutingModule } from '../app-routing.module';
import { UsersService } from "../../services/users.service";
import { UserApi } from "../../models/usersapi";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        HttpClientModule,
        AppRoutingModule,
        FormsModule
      ],
      providers: [
        StorageService,
        UsersService
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('Should set username model through ngModel sign in', async () => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('.operator1')).nativeElement;
    // Act 
    inputElement.value = 'jahaziel';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    // Assert 
    expect(component.username).toEqual('jahaziel');
  });

  xit('Should set password model through ngModel sign in', async () => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('.operator2')).nativeElement;
    // Act 
    inputElement.value = '123456789';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    // Assert 
    expect(component.password).toEqual('123456789');
  });

  it('Deberia inicia sesión si no tiene los campos llenos ', () => {

    // Arrange
    let isLoginFailed;
    component.username = 'jahaziel';
    component.password = '123456789';
    // Act
    component.logIn();
    isLoginFailed = component.isLoginFailed;
    // Assert
    expect(isLoginFailed).toBe(false);
  });

  it('No Deberia inicia sesión si no tiene los campos llenos ', () => {

    // Arrange
    let res;
    component.username = '';
    component.password = '';
    // Act
    component.logIn();
    res = component.result;

    // Assert
    expect(res).toBe("isEmpty");
  });

});
