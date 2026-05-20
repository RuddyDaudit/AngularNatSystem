import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from 'primeng/button';
import { HeaderLayout } from './core/layout/header/header.layout';
import { SubNavLayout } from './core/layout/sub-nav/sub-nav.layout';
import { ContainerLayout } from './core/layout/container/container.layout';
import { GlobalSpinnerLayout } from './core/layout/global-spinner/global-spinner.layout';
import { FooterLayout } from './core/layout/footer/footer/footer.layout';
import { CivilitePipe } from './shared/pipes/civilite.pipe';

@Component({
  selector: 'app-root',
  imports: [
    HeaderLayout,
    SubNavLayout,
    ContainerLayout,
    GlobalSpinnerLayout,
    FooterLayout,
    CivilitePipe,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  selectedMode: 'light' | 'dark' = undefined;
}
