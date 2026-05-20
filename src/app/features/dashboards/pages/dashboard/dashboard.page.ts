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
import { ReplaceByNrDirective } from '../../../../shared/directives/replace-by-nr.directive';
import { InputText } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [HighlightDirective, ReplaceByNrDirective, InputText, FormsModule],
  templateUrl: './dashboard.page.html',
  styleUrl: './dashboard.page.scss',
})
export class DashboardPage {
  test = 'Hello';
  clickedVar: string;

  click(): void {
    console.debug('clicked');
  }
}
