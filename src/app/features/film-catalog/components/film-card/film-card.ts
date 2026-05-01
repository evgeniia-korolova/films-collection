import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { Film } from '../../../../core/models/film.interface';
import { UpperCasePipe } from '@angular/common';
import { Router } from '@angular/router';
import { FilmService } from '../../../../data-access/film-service';
import { FavoriteButton } from "../../../../shared/components/favorite-button/favorite-button";

@Component({
  selector: 'app-film-card',
  imports: [UpperCasePipe, FavoriteButton],
  templateUrl: './film-card.html',
  styleUrl: './film-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmCard {
  private router = inject(Router);
  protected readonly filmService = inject(FilmService);
  readonly film = input.required<Film>();
  toggleFavorite = output<number>();

  goToDetails() {
    this.router.navigate(['/film', this.film().id]);
  }

  onFavoriteToggle(event: Event) {
    event.stopPropagation();
    this.filmService.toggleFavorite(this.film().id);
  }
}
