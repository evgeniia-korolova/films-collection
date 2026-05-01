import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoFocusDirective } from '../../shared/directives/auto-focus.directive';

@Component({
  selector: 'app-film-search',
  imports: [FormsModule, AutoFocusDirective],
  templateUrl: './film-search.html', 
  styleUrl: './film-search.scss',
})
export class FilmSearch {
  value = model('');
}
