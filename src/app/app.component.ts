import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testingMock';
  constructor( private authService: AuthService) {}
  hello() {
    return 'Hello Wolrd!'
  }
  goodBye() {
    return 'Good Bye World!'
  }

  canLogin(userName: string, password: number) : boolean {
    return this.authService.isAuth(userName, password)
  }

  sort(arr : Array<number>) {
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < (arr.length - i - 1); j++) {
        if (arr[j] > arr[j + 1]) {
          var temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = temp
        }
      }
    }
    return arr
  }
}
