  
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ImcApi } from '../models/imcapi';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { StorageService } from "../services/storage.service";

@Injectable({
  providedIn: 'root'
})

export class ImcService {

 apiURL = 'https://user-imc-api.herokuapp.com';


  constructor(private http: HttpClient,
              private storageService: StorageService) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.storageService.getSession("token")
    })
  }  
  // HttpClient API post() method => Create employee
  createImc(imcApi: ImcApi): Observable<ImcApi> {
    return this.http.post<ImcApi>(this.apiURL + '/imcs', JSON.stringify(imcApi), this.httpOptions)
  }

}