import { Component, effect, inject, signal } from '@angular/core';
import { FilmService } from '../../../../data-access/film-service';
import { FilmCard } from "../film-card/film-card";
import { FilmSearch } from "../../../film-search/film-search";

@Component({
  selector: 'app-film-list',
  imports: [FilmCard, FilmSearch],
  templateUrl: './film-list.html',
  styleUrl: './film-list.scss',
})
export default class FilmList {
  protected readonly filmService = inject(FilmService);
  searchQuery = signal('');
  
  constructor() {
    effect((onCleanup) => {
      const query = this.searchQuery();     
      
      const timeout = setTimeout(() => {
        this.filmService.updateSearch(query);
      }, 300);
      
      onCleanup(() => clearTimeout(timeout));
    });
  }
}
