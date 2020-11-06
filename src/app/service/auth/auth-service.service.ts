import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {
  api: String = 'https://ids-bakend.herokuapp.com/';
  constructor(private _httpClient: HttpClient) {
  }

  isAuthenticated(): boolean {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      return user['token'] ? true : false
    } else {
      return false
    }
  }

  login(username: String, password: String): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    };
    return this._httpClient.post(`${this.api}api/v1/login/`, { username, password }, httpOptions);
  }

  getUsers(): Observable<any> {
    let usuario = JSON.parse(localStorage.getItem('user'));
    console.log(usuario['token']);


    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'Application/json',
        'Authorization': `Token ${usuario['token']}`
      })
    }

    console.log(httpOptions.headers);


    return this._httpClient.get(`${this.api}api/v1/profile/userModel_url/`, httpOptions)
  }

  savePost(fullname: String, address: String, age: number): Observable<any>{
    let usuario = JSON.parse(localStorage.getItem('user'));
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'Application/json',
        'Authorization': `Token ${usuario['token']}`
      })
    }
    return this._httpClient.post(`${this.api}api/v1/profile/userModel_post/`, { fullname, address,age }, httpOptions);
  }

  editPut(id: number,fullname: String, address: String, age: number): Observable<any>{
    let usuario = JSON.parse(localStorage.getItem('user'));
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'Application/json',
        'Authorization': `Token ${usuario['token']}`
      })
    }
    console.log("este es el token= "+usuario['token']);
    
    return this._httpClient.put(`${this.api}api/v1/profile/userModel_update/${id}/`, { fullname, address,age }, httpOptions);
  }

  deleteU(id: number): Observable<any>{
    let usuario = JSON.parse(localStorage.getItem('user'));
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'Application/json',
        'Authorization': `Token ${usuario['token']}`
      })
    }
    console.log("este es el id= "+id);
    
    return this._httpClient.delete(`${this.api}api/v1/profile/userModel_delete/${id}/`, httpOptions);
  }



}
