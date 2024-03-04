import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRes, User } from '../core/user';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  isLoggedIn !: boolean;
  @Output() submitData !: EventEmitter<User>
  title : string;

  constructor(public router: Router, private loginService: LoginService) {
    this.isLoggedIn = false;
    this.submitData = new EventEmitter<User>()
    this.title = 'hello world'
  }

  ngOnInit() : void {}
  login(email: string, password:string) : void{
    this.isLoggedIn = !this.isLoggedIn
    this.submitData.emit({email, password})
    this.loginService.login(email, password).subscribe((data: LoginRes) => {
      console.log(data)
    })
  }

  get loginState()  : string{
    return `User is ${this.isLoggedIn ? 'Logged in' : 'not Logged in'}`
  }

  navigateToHome() {
    if (this.isLoggedIn) {
      this.router.navigate(['/'])
    }
  }
}
