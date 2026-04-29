import { Directive, inject, input, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appEscapeNavDirective]',
})
export class EscapeNavDirective implements OnDestroy{
  private router = inject(Router);
  private renderer = inject(Renderer2);

  appEscapeNav = input<string>('/');

  constructor() {
    this.unlisten = this.renderer.listen('window', 'keydown', (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        this.navigate();
      }
    });
  }

  private unlisten: (() => void) | undefined;

  private navigate(): void {
    this.router.navigate([this.appEscapeNav()]);
  }

  ngOnDestroy(): void {    
    if (this.unlisten) {
      this.unlisten();
    }
  }
  
}
