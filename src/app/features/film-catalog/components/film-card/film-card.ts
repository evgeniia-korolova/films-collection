import { Component, input, output } from '@angular/core';
import { Film } from '../../../../core/models/film.interface';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-film-card',
  imports: [UpperCasePipe],
  templateUrl: './film-card.html',
  styleUrl: './film-card.scss',
})
export class FilmCard {
  readonly film = input.required<Film>();

  toggleFavorite = output<number>();

  onFavoriteToggle(event: Event) {
    event.stopPropagation(); // Чтобы не сработал переход на детали
    this.toggleFavorite.emit(this.film().id);
  }
}
