import { HttpClient } from '@angular/common/http';
import { inject, Injectable, resource } from '@angular/core';
import { Film } from '../core/models/film.interface';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private readonly http = inject(HttpClient);

  private filmsResource = resource({
    loader: async () => {
      const response = await fetch('/data/films.json');
      if (!response.ok) throw new Error('Failed to fetch films');
      return (await response.json()) as Film[] | [];
    },
  });

  readonly allFilms = this.filmsResource.value;

  getFilmById(id: number): Film | undefined {
    return this.allFilms()?.find((film) => film.id === id);
  }
}
