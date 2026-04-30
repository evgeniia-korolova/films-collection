import { Component, computed, inject, signal } from '@angular/core';
import { FilmService } from '../../../data-access/film-service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Breadcrumbs } from "../breadcrumbs/breadcrumbs";

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, Breadcrumbs],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly filmService = inject(FilmService);
  protected readonly title = signal('films-collection');

  favoritesCount = computed(() => this.filmService.favoriteFilms().length);
}
