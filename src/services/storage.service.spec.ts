import { TestBed } from '@angular/core/testing';
import { UsersService } from './users.service';
import { HttpClientModule } from '@angular/common/http';
import { UserApi } from "../models/usersapi";
import { StorageService } from "../services/storage.service";

describe('StorageService', () => {

  let service: StorageService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers:[HttpClientModule, StorageService]
    })
    service = TestBed.inject(StorageService);
  });

  it('should be created StorageService', () => {
    expect(service).toBeTruthy();
  });

  it('should set token in session storage method and get token', () => {

    service.setSession("token", "Bearer");

    expect(service.getSession('token')).toEqual('Bearer');
  });

});
