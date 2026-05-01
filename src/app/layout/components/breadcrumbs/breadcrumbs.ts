import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BreadcrumbService } from '../../../core/services/breadcrumb-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  imports: [RouterLink],
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Breadcrumbs {
  protected bcService = inject(BreadcrumbService);
}
