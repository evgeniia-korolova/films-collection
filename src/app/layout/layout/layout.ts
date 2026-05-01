import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { Header } from "../components/header/header";
import { RouterOutlet } from "@angular/router";
import { Footer } from "../components/footer/footer";
import { ThemeService } from '../../core/services/theme-service';
import { Breadcrumbs } from "../components/breadcrumbs/breadcrumbs";

@Component({
  selector: 'app-layout',
  imports: [Header, RouterOutlet, Footer, Breadcrumbs],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Layout {
  protected readonly themeService = inject(ThemeService);
  protected readonly currentTheme = this.themeService.theme;

  constructor() {
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const initial: 'light' | 'dark' = saved === 'dark' ? 'dark' : 'light';
    document.documentElement.classList.add(initial);
    this.currentTheme.set(initial);
  }

  toggleTheme() {
    const next = this.currentTheme() === 'light' ? 'dark' : 'light';
    document.documentElement.classList.remove(this.currentTheme());
    document.documentElement.classList.add(next);
    this.currentTheme.set(next);
    localStorage.setItem('theme', next);
  }
}
