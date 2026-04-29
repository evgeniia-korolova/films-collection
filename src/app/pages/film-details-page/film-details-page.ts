import { Component, computed, inject, input } from '@angular/core';
import { FilmService } from '../../data-access/film-service';
import { RouterLink } from '@angular/router';
import { HumanReadableTimePipe } from '../../shared/pipes/human-readable-time-pipe';

@Component({
  selector: 'app-film-details-page',
  imports: [RouterLink, HumanReadableTimePipe],
  templateUrl: './film-details-page.html',
  styleUrl: './film-details-page.scss',
})
export default class FilmDetailsPage {
  protected readonly filmService = inject(FilmService);
  protected readonly id = input.required<string>();

  protected readonly film = computed(() => this.filmService.getFilmById(Number(this.id())));
}
