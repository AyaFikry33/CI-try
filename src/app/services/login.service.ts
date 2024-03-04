import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRes } from '../core/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  isLogin() {
    return true;
  }

  login(userName:string, password: string) : Observable<LoginRes>{
    return this.http.post<LoginRes>('https://dummyjson.com/auth/login', {
      username: userName,
      password: password,
    }, {headers: { 'Content-Type': 'application/json' }})
  }
}

