import { Component, inject, input, output } from '@angular/core';
import { Film } from '../../../../core/models/film.interface';
import { UpperCasePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-film-card',
  imports: [UpperCasePipe],
  templateUrl: './film-card.html',
  styleUrl: './film-card.scss',
})
export class FilmCard {
  private router = inject(Router);
  readonly film = input.required<Film>();
  toggleFavorite = output<number>();

  goToDetails() {
    this.router.navigate(['/film', this.film().id]);
  }

  onFavoriteToggle(event: Event) {
    event.stopPropagation();
    this.toggleFavorite.emit(this.film().id);
  }
}
