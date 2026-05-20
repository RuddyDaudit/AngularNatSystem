import { Component } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-personnes-form',
  imports: [FormsModule, Button],
  templateUrl: './personnes-form.page.html',
  styleUrl: './personnes-form.page.scss',
})
export class PersonnesFormPage {
  submitForm(): void {}
}
