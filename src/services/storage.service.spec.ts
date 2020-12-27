import { TestBed } from '@angular/core/testing';
import { UsersService } from './users.service';
import { HttpClientModule } from '@angular/common/http';
import { UserApi } from "../models/usersapi";
import { StorageService } from "../services/storage.service";

describe('DataApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule],
    providers: [ HttpClientModule, StorageService]
  }));

  it('should return token method set and get local', () => {

    const service: StorageService = TestBed.get(StorageService);

    service.setLocal("token", "Bearer");

    expect(service.getLocal('token')).toEqual('Bearer');
  });

  it('should return token method set and get session', () => {

    const service: StorageService = TestBed.get(StorageService);

    service.setSession("token", "Bearer");

    expect(service.getSession('token')).toEqual('Bearer');
  });

});
