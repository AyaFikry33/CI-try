import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';

// describe("welcome the user", () => {
//   it('must Return Hello Wolrd!', () => {
//     const appComp = new AppComponent();
//     expect(appComp.hello()).toBe("Hello Wolrd!");
//   });
// })
describe("App Component", () => {
  let component: AppComponent;
  let fixture : ComponentFixture<AppComponent>
  let authService : AuthService

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [],
      imports: [HttpClientModule]
    });
    fixture = TestBed.createComponent(AppComponent)
    component = fixture.componentInstance
    authService = TestBed.inject(AuthService)
  })

  it("Should create app component", () => {
    expect(component).toBeTruthy();
  });

  it("Should have a title", () => {
    expect(component.title).toEqual('testingMock');
  });
  it("Should be Authenticated", () => {
    expect(component.canLogin('Aya',123)).toBeTruthy();
  });

  it("should return a sorted array of numbers in ascending order", () => {
    expect(component.sort([7,5,6,8,9,3,2,4,1])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
})

