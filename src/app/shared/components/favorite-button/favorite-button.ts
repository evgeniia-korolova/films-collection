import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-favorite-button',
  imports: [],
  templateUrl: './favorite-button.html',
  styleUrl: './favorite-button.scss',
})
export class FavoriteButton {
  isFavorite = input.required<boolean>();
  toggleFavorite = output<void>();

  onToggle(event: Event): void {
    event.stopPropagation();
    this.toggleFavorite.emit();
  }
}
