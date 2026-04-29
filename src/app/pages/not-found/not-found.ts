import { Component } from '@angular/core';
import { EscapeNavDirective } from '../../shared/directives/escape-nav.directive';

@Component({
  selector: 'app-not-found',
  imports: [EscapeNavDirective],
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss',
})
export default class NotFound {}
