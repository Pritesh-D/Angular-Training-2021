import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[focusonhover]'
})
export class FocusonhoverDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @Input('focusonhover')
  focusonhover: string = ''

  private setFontSize(fontSize: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-size', fontSize);
  }

  @HostListener("mouseenter")
  mouseEnter() {
    this.setFontSize(this.focusonhover);
  }

  @HostListener("mouseleave")
  mouseLeave() {
    this.setFontSize('');
  }
}
