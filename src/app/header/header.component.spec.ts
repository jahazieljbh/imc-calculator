import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { StorageService } from '../services/storage.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [FormsModule, HttpClientModule, AppRoutingModule],
      providers:[StorageService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia remover al usuario de localstorage ', () => {
    let res;

    component.logout();
    res = component.result

    expect(res).toEqual('logout');
  });

});
