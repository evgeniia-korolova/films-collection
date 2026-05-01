import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { FilmService } from '../../../../data-access/film-service';
import { FilmCard } from "../film-card/film-card";
import { FilmSearch } from "../../../film-search/film-search";
import { BreadcrumbService } from '../../../../core/services/breadcrumb-service';

@Component({
  selector: 'app-film-list',
  imports: [FilmCard, FilmSearch],
  templateUrl: './film-list.html',
  styleUrl: './film-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FilmList {
  protected readonly filmService = inject(FilmService);
  private bcService = inject(BreadcrumbService);
  searchQuery = signal('');
  
  constructor() {
    this.bcService.setBreadcrumbs([{ label: 'Home', url: '/' }]);
    
    effect((onCleanup) => {
      const query = this.searchQuery();     
      
      const timeout = setTimeout(() => {
        this.filmService.updateSearch(query);
      }, 300);
      
      onCleanup(() => clearTimeout(timeout));
    });
  }
}
