import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FilmService } from '../../data-access/film-service';
import { FilmCard } from "../../features/film-catalog/components/film-card/film-card";
import { EscapeNavDirective } from '../../shared/directives/escape-nav.directive';
import { BreadcrumbService } from '../../core/services/breadcrumb-service';

@Component({
  selector: 'app-favorites-page',
  imports: [FilmCard, EscapeNavDirective],
  templateUrl: './favorites-page.html',
  styleUrls:[ './favorites-page.scss', '../../features/film-catalog/components/film-list/film-list.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FavoritesPage {
  filmService = inject(FilmService);
  private bcService = inject(BreadcrumbService);

  constructor() {   
    this.bcService.setBreadcrumbs([{ label: 'Favorites', url: '/favorites' }]);
  }
}
