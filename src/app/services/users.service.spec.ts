import { TestBed } from '@angular/core/testing';
import { UsersService } from './users.service';
import { HttpClientModule } from '@angular/common/http';
import { UserApi } from '../models/usersapi';


describe('DataApiService', () => {
  let service: UsersService;
  let username: string;
  let password: string;
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers:[UsersService]
    })
    service = TestBed.inject(UsersService);
    username = "jahaziel";
    password = "123456789";
  });

  it('should return an Logged User', (done: DoneFn) => {
    // Arrange
    var mydata = new UserApi(username,password);
    mydata.username = username;
    mydata.password = password;
    // Act
    service.loginUser(mydata).subscribe(user => {
      // Assert
      expect(user.username).toEqual('jahaziel');
      done(); //call DoneFn
    });
  });
});
