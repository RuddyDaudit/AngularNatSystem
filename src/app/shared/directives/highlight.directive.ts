import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  input,
  InputSignal,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  readonly #elementRef: ElementRef = inject(ElementRef);
  readonly #renderer: Renderer2 = inject(Renderer2);
  color: InputSignal<'red' | 'blue' | 'green' | 'transparent'> = input();

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.#highlightElement(this.color());
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.#highlightElement('transparent');
  }

  #highlightElement(color: 'red' | 'blue' | 'green' | 'transparent'): void {
    this.#renderer.setStyle(this.#elementRef.nativeElement, 'background-color', color ?? 'yellow');
  }
}
