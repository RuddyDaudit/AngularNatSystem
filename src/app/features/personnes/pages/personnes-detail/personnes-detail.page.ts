import { Component, input, inject, OnInit, InputSignal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CivilitePipe } from '../../../../shared/pipes/civilite.pipe';
import { DatePipe, JsonPipe } from '@angular/common';
import { Personne } from '../../../../shared/model/personnes.model';
import { LabelValueConsFragment } from '../../../../shared/fragments/label-value-cons/label-value-cons.fragment';

@Component({
  selector: 'app-personnes-detail',
  imports: [CivilitePipe, JsonPipe, LabelValueConsFragment, DatePipe],
  templateUrl: './personnes-detail.page.html',
  styleUrl: './personnes-detail.page.scss',
})
export class PersonnesDetailPage {
  /*
  readonly #activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  persId: string | null | undefined;

  ngOnInit(): void {
    this.persId = this.#activatedRoute.snapshot.paramMap.get('persId');

    this.#activatedRoute.paramMap.subscribe({
      next: (params): void => {
        this.persId = params.get('persId')
      }
    })
  }
    */

  persId: InputSignal<string | undefined | null> = input<string | undefined | null>();
  personne: InputSignal<Personne> = input<Personne>();
}
