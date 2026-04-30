import { computed, Injectable, resource, signal } from '@angular/core';
import { Film } from '../core/models/film.interface';
import { storage } from '../shared/utils/storage.util';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private readonly STORAGE_KEY = 'favorite_films';
  private favoriteIds = signal<number[]>(storage.get<number[]>(this.STORAGE_KEY) ?? []);
  searchQuery = signal('');

  private filmsResource = resource({
    loader: async () => {
      const response = await fetch('./data/films.json');
      if (!response.ok) throw new Error('Failed to fetch films');
      return (await response.json()) as Film[] | [];
    },
  });

  readonly rawFilms = this.filmsResource.value;

  readonly allFilms = computed(() => {
    const rawFilms = this.filmsResource.value() ?? [];
    const favorites = this.favoriteIds();

    return rawFilms.map((film) => ({
      ...film,
      isFavorite: favorites.includes(film.id),
    }));
  });

  readonly filteredFilms = computed(() => {
    const films = this.allFilms();
    const query = this.searchQuery().toLowerCase().trim();

    if (!query) return films;
    
    return films.filter((film) => 
      film.title.toLowerCase().includes(query) || 
      film.description?.toLowerCase().includes(query)
    );
  });

  updateSearch(val: string) {
    this.searchQuery.set(val);
  }

  readonly favoriteFilms = computed(() => this.allFilms().filter((f) => f.isFavorite));

  toggleFavorite(id: number): void {
    this.favoriteIds.update((ids) => {
      const isFavorite = ids.includes(id);
      const updatedIds = isFavorite ? ids.filter((favId) => favId !== id) : [...ids, id];

      storage.set(this.STORAGE_KEY, updatedIds);

      return updatedIds;
    });
  }

  getFilmById(id: number): Film | undefined {
    return this.allFilms()?.find((film) => film.id === id);
  }
}
