import { TestBed } from '@angular/core/testing';
import { UsersService } from './users.service';
import { HttpClientModule } from '@angular/common/http';
import { StorageService } from "../services/storage.service";

describe('StorageService', () => {

  let service: StorageService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers:[HttpClientModule, StorageService]
    })
    service = TestBed.get(StorageService);
  });

  it('should be created StorageService', () => {
    expect(service).toBeTruthy();
  });

  it('should set token in session storage method and get token', () => {

    service.setSession("token", "Bearer");

    expect(service.getSession('token')).toEqual('Bearer');
  });

  it('should set id in session storage method and get id', () => {

    service.saveId("id", "30");

    expect(service.getId('id')).toEqual('30');
  });

  it('should set email in session storage method and get email', () => {

    service.saveEmail("email", "jahaziel@gmail.com");

    expect(service.getEmail('email')).toEqual('jahaziel@gmail.com');
  });

  it('should set email in session storage method and get email', () => {

    service.saveEmail("email", "jahaziel@gmail.com");

    expect(service.getEmail('email')).toEqual('jahaziel@gmail.com');
  });

  it('should set username in session storage method and get username', () => {

    service.saveUsername("username", "jahazieljbh");

    expect(service.getUsername('username')).toEqual('jahazieljbh');
  });
});
