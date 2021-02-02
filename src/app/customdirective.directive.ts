import { Directive,ElementRef ,HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomdirective]'
})
export class CustomdirectiveDirective {

  temp=""

  constructor(private ele:ElementRef) {
    ele.nativeElement.style.color="red";
    this.temp=this.ele.nativeElement.innerHTML
   }
   @HostListener('mouseenter') onMouseEnter() {
    // this.highlight('yellow');
    this.ele.nativeElement.innerHTML="mouseentered";
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.ele.nativeElement.innerHTML="mouseexit";
  }

}
