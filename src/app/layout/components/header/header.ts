import { UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [UpperCasePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly title = signal('films-collection');
}
