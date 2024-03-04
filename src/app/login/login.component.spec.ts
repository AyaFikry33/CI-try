import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from "@angular/core/testing"
import { LoginComponent } from "./login.component"
import { RouterTestingModule } from "@angular/router/testing";
import { Router, Routes } from "@angular/router";
import { LoginRes, User } from "../core/user";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { LoginService } from "../services/login.service";

describe("Login Component", () => {
  // let component : LoginComponent
  let loginService : LoginService;
  let httpMock : HttpTestingController;
  let fixture : ComponentFixture<LoginComponent>
  let submitEl : DebugElement;
  let emailEl : DebugElement;
  let passwordEl : DebugElement;
  let component : LoginComponent;
  let userMock : User
  // const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{provide : ComponentFixtureAutoDetect, useValue : true}] // this is for detect the changes without need to run fixture.detectChanges every time
    })
    fixture = TestBed.createComponent(LoginComponent)
    component = fixture.componentInstance
    userMock = {
      email: 'aya@test.com',
      password: '12435'
    }
    submitEl = fixture.debugElement.query(By.css('form button'))
    emailEl = fixture.debugElement.query(By.css('form input.email'))
    passwordEl = fixture.debugElement.query(By.css('form input.password'))
    // loginService = TestBed.inject(LoginService)
    // httpMock = TestBed.inject(HttpTestingController)
  })
  it("should return false ", () => {
    expect(component.isLoggedIn).toBe(false, 'false at first')
    component.login(userMock.email, userMock.password)
    expect(component.isLoggedIn).toBe(true, 'true after click login')
    component.login(userMock.email, userMock.password)
    expect(component.isLoggedIn).toBe(false, 'false after second click')
  })

  it("the status should be Logged in", () =>{
    expect(component.loginState).toMatch(/not Logged in/)
    component.login(userMock.email, userMock.password)
    expect(component.loginState).toMatch(/Logged in/)
  })
  it("submitData must emit email && password", () =>{
    let user : User;
    emailEl.nativeElement.value = userMock.email
    passwordEl.nativeElement.value = userMock.password
    component.submitData.subscribe((data: User) => {
      user = data
    })

    submitEl.triggerEventHandler('click')
    expect(user!.email).toBe(userMock.email)

    // loginService.login(userMock.email, userMock.password).subscribe((data : LoginRes) => {
    //   expect(data).toThrowError()
    // })
    // const res = httpMock.expectOne('https://dummyjson.com/auth/login')
    // res.flush({
    //   "id": 15,
    //   "username": "kminchelle",
    //   "email": "kminchelle@qq.com",
    //   "firstName": "Jeanne",
    //   "lastName": "Halvorson",
    //   "gender": "female",
    //   "image": "https://robohash.org/Jeanne.png?set=set4",
    //   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZz9zaXplPTUweDUwJnNldD1zZXQxIiwiaWF0IjoxNjM1NzczOTYyLCJleHAiOjE2MzU3Nzc1NjJ9.n9PQX8w8ocKo0dMCw3g8bKhjB8Wo7f7IONFBDqfxKhs"
    // })
    // httpMock.verify()
  })
  it("the submit button should be disabled if isLoggedIn equal false", () => {
    component.isLoggedIn = true;
    fixture.detectChanges() // change the view status
    expect(submitEl.nativeElement.disabled).toBeTruthy()
  })
  it("test if the title of the page is ", () => {
    const h1 : HTMLElement = fixture.nativeElement.querySelector("h1")
    fixture.detectChanges()
    expect(h1.textContent).toBe(component.title)
  })
})

