import { Component } from '@angular/core';
import { ProgressSpinner } from 'primeng/progressspinner';

@Component({
  selector: 'app-global-spinner',
  imports: [ProgressSpinner],
  templateUrl: './global-spinner.layout.html',
  styleUrl: './global-spinner.layout.scss',
})
export class GlobalSpinnerLayout {
  isLoading: boolean = false;
}
