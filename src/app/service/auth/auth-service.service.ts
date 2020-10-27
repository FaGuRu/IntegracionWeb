import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {
  api: String = 'http://localhost:8000/';
  constructor(private _httpClient: HttpClient) { }

  isAuthenticated(): boolean {
    let user = JSON.parse(localStorage.getItem('user'));
    if(user){
      return user['token']? true : false
    }else{
      return false
    }
  }

  login(username: String, password: String): Observable<any>{
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-type': 'application/json',
      })
    };
    return this._httpClient.post(`${this.api}api/v1/login/`, {username, password}, httpOptions);
  }

}
