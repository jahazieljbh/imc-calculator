import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserApi } from '../models/usersapi';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class UsersService {

    // Define API
    apiURL = 'http://localhost:8080';

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
    postUsers(userApi): Observable<UserApi> {
        console.log(JSON.stringify(userApi));
        return this.http.post<UserApi>(this.apiURL + '/api/auth/signin', JSON.stringify(userApi), this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.MessageError)
            )
    }



    // Error handling 
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
    }

    MessageError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            //errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
            alert('USUARIO Y CONTRASEÑA INCORRECTOS');
        }
        //window.alert(errorMessage);
        return throwError(errorMessage);
    }

}