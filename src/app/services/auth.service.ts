import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';
import { Observable, map } from 'rxjs';
interface IPost {
  userId : number;
  id: number;
  title: string;
  body: string
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  isAuth(userName: string, password: number) : boolean {
    if (userName && password) {
      return true
    } else return false
  }

  getPost(postId : number) : Observable<IPost> {
    return this.http
      .get<IPost>(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  }
}
