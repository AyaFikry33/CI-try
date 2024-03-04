import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { TestBed } from '@angular/core/testing';

interface IPost {
  userId : number;
  id: number;
  title: string;
  body: string
}

describe("Check for isAuth", () => {
  let service: AuthService;
  let userName : string;
  let password : number;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    })
    service= TestBed.inject(AuthService)
    userName = 'aya'
    password = 123
  })
  it("Should get the data successfull", (done : DoneFn) => {
    service.getPost(1).subscribe((post : IPost) => {
      expect(post.id).toEqual(1)
      done();
    })
  })
  it('must return true if the user is logged in', () => {
    expect(service.isAuth(userName, password)).toBeTruthy();
  })
  it('must return false if the user is not logged in', () => {
    expect(!service.isAuth(userName, password)).toBeFalsy();
  })

})

describe("AuthService with mock data", () => {
  let service: AuthService
  let httpMock: HttpTestingController;
  const postMock = {
    userId : 1,
    id: 2,
    title: "string",
    body: "string"
  }
  beforeEach(()=> {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
    service = TestBed.inject(AuthService)
    httpMock = TestBed.inject(HttpTestingController)
  })

  it("getPost Must get data as expected", () => {

    service.getPost(1).subscribe((data : IPost) =>{
      console.log(postMock)
      expect(data).toEqual(postMock)
    })

    const req = httpMock.expectOne(
      'https://jsonplaceholder.typicode.com/posts/1'
    );
    expect(req.request.method).toEqual('GET')

    req.flush(postMock)
    httpMock.verify() // to make sure that there is no other requests are pinding outside
  })
})
