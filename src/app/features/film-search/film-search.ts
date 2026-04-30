import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-film-search',
  imports: [FormsModule],
  templateUrl: './film-search.html', 
  styleUrl: './film-search.scss',
})
export class FilmSearch {
  value = model('');
}
