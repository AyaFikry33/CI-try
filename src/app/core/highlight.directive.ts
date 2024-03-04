import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostBinding('style.background-color') bgColor !: string;
  @HostListener('mouseover') onHover() : void {
    this.bgColor = 'yellow'
  }
  @HostListener('mouseout') onLeave() : void {
    this.bgColor = 'inherit'
  }
  constructor() { }

}
