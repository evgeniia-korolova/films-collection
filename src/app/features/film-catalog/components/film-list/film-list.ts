import { Component, effect, inject } from '@angular/core';
import { FilmService } from '../../../../data-access/film-service';
import { FilmCard } from "../film-card/film-card";

@Component({
  selector: 'app-film-list',
  imports: [FilmCard],
  templateUrl: './film-list.html',
  styleUrl: './film-list.scss',
})
export default class FilmList {
  protected readonly filmService = inject(FilmService);

  constructor() {
    // Проверка в консоли через эффект
    effect(() => {
      const data = this.filmService.allFilms();
      if (data) {
        console.log('Данные успешно получены в компонент:', data);
      }
    });
  }
}
