import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { GraficaComponent } from './grafica.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { StorageService } from '../services/storage.service';
import { ImcService } from '../services/imc.service';
import { UsersService } from '../services/users.service';

describe('GraficaComponent', () => {
  let component: GraficaComponent;
  let fixture: ComponentFixture<GraficaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraficaComponent],
      imports: [HttpClientModule, AppRoutingModule, NgxSpinnerModule],
      providers: [StorageService, ImcService, UsersService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
