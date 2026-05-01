import { afterNextRender, Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appAutoFocusDirective]',
})
export class AutoFocusDirective {
  private el = inject(ElementRef<HTMLElement>);
  constructor() {
    afterNextRender(() => {
      this.el.nativeElement.focus();
    });
  }
}
