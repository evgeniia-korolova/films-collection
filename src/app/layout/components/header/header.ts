import { ChangeDetectionStrategy, Component, computed, inject, input, output, } from '@angular/core';
import { FilmService } from '../../../data-access/film-service';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { ThemeService } from '../../../core/services/theme-service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  protected readonly filmService = inject(FilmService);
  themeService = inject(ThemeService);
  readonly currentTheme = input.required<string>();
  toggleTheme = output<void>();  

  favoritesCount = computed(() => this.filmService.favoriteFilms().length);
}
