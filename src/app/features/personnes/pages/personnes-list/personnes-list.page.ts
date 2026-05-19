import { Component, inject } from '@angular/core';
import { PersonnesCrud } from '../../services/personnes.crud';
import { Button } from "primeng/button";
import { DialogModule, Dialog } from 'primeng/dialog';

@Component({
  selector: 'app-personnes-list',
  imports: [Button, Dialog],
  templateUrl: './personnes-list.page.html',
  styleUrl: './personnes-list.page.scss',
})
export class PersonnesListPage {
  readonly #personnesCrud: PersonnesCrud = inject(PersonnesCrud);
  isDialogVisiblie = false;

  addPersonne(): void { 
    this.isDialogVisiblie = true;
  }
}
