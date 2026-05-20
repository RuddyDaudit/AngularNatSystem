import {
  Component,
  ElementRef,
  HostListener,
  inject,
  input,
  InputSignal,
  Renderer2,
} from '@angular/core';
import { HighlightDirective } from '../../../../shared/directives/highlight.directive';

@Component({
  selector: 'app-dashboard',
  imports: [HighlightDirective],
  templateUrl: './dashboard.page.html',
  styleUrl: './dashboard.page.scss',
})
export class DashboardPage {}
