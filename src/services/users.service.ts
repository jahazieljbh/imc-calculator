import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserApi } from '../models/usersapi';
import { ResponseApi } from '../models/responseapi';
import { User } from '../models/user';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})

export class UsersService {

    // Define API
    API_URI = 'https://user-imc-api.herokuapp.com/api/auth';
    //API_URI = 'http://localhost:8080/api/auth';

    constructor(private http: HttpClient) { }

    /*========================================
      CRUD Methods for consuming RESTful API
    =========================================*/

    // Http Options
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }
    // HttpClient API post() method => Create employee
    loginUser(credentials: UserApi): Observable<ResponseApi> {
        return this.http.post<ResponseApi>(`${this.API_URI}/signin`, credentials, httpOptions)
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('token')
        return !(user === null)
    }

    registrar(info: User): Observable<string> {
        return this.http.post<string>(`${this.API_URI}/signup`, info, httpOptions)
    }

}