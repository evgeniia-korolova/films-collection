import { Component, inject } from '@angular/core';
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
  
}
