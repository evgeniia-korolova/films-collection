import { computed, Injectable, signal } from '@angular/core';
import { Breadcrumb } from '../models/breadcrumb.interface';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  private currentCrumbs = signal<Breadcrumb[]>([{ label: 'Home', url: '/' }]);

  readonly breadcrumbs = computed(() => this.currentCrumbs());

  setBreadcrumbs(crumbs: Breadcrumb[]) {
    this.currentCrumbs.set(crumbs);
  }
}
