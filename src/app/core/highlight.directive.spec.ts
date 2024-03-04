import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { HighlightDirective } from './highlight.directive';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

describe('test Highlight Directive', () => {
  let component : AppComponent;
  let fixture : ComponentFixture<AppComponent>;
  let titleEl : DebugElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations : [HighlightDirective, AppComponent],
      imports: [HttpClientModule]
    })
    fixture = TestBed.createComponent(AppComponent)
    component = fixture.componentInstance
    titleEl = fixture.debugElement.query(By.css('h1.title'))
  })
  it("on hover bg must be yellow", () => {
    titleEl.triggerEventHandler('mouseover')
    fixture.detectChanges()
    expect(titleEl.nativeElement.style.backgroundColor).toBe('yellow')
  })
});
