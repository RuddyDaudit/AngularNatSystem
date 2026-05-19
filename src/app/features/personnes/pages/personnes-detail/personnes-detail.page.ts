import { Component, input, inject, OnInit , InputSignal} from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-personnes-detail',
  imports: [],
  templateUrl: './personnes-detail.page.html',
  styleUrl: './personnes-detail.page.scss',
})
export class PersonnesDetailPage{
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

  persId:InputSignal<string | undefined | null > = input<string | undefined | null >()
}
