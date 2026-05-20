import { Directive, ElementRef, inject, input, InputSignal, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appReplaceByNr]',
})
export class ReplaceByNrDirective {
  readonly #elementRef: ElementRef = inject(ElementRef);
  readonly #renderer: Renderer2 = inject(Renderer2);
  valNull: InputSignal<string> = input();
}
