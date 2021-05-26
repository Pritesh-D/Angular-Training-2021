import { Directive, Renderer2, Input, HostListener, ElementRef } from '@angular/core';
import { ValidationErrors, AbstractControl } from '@angular/forms';
import { uniqueIdValidator } from '../productform/app.uniqueid.validator';

@Directive({
  selector: '[uniqueidvalidator]',
  //providers: [{ provide: NG_VALIDATORS, useExisting: uniqueIdValidator, multi: true }]
})
export class UniqueidvalidatorDirective {

  constructor(private elemet: ElementRef, private renderer: Renderer2) { }

  @Input("uniqueidvalidator")
  uniqueidvalidator: Array<any> = new Array();

  validate(control: AbstractControl): ValidationErrors | null {
    var result = uniqueIdValidator(this.uniqueidvalidator);
    if (result(control) !== null) {
      this.renderer.setStyle(control, "box-shadow", '0px 0px 10px red');
      this.renderer.setStyle(control, "border-color", 'red');
    }
    else {
      this.renderer.setStyle(control, "box-shadow", '');
      this.renderer.setStyle(control, "border-color", '');
    }
    return result(control);
  }

  @HostListener("keyup")
  inputChange() {
    this.validate(this.elemet.nativeElement);
  }
}
