import { Component, ChangeDetectionStrategy, InputSignal, input, OutputEmitterRef, output } from '@angular/core';
import { Button } from "primeng/button";

@Component({
  selector: 'app-header',
  imports: [Button],
  templateUrl: './header.layout.html',
  styleUrl: './header.layout.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone:true
})
export class HeaderLayout {
  testComm: InputSignal<string> = input.required<string>();
  headerEmitter: OutputEmitterRef<'light' | 'dark'> = output<'light' | 'dark'>();
  isModeSombre: boolean = false;

  toggleDarkMode(): void { 
    
    const element = document.querySelector('html');
    element?.classList.toggle('app-comp-dark');
    this.isModeSombre = !this.isModeSombre;
    this.buttonClicked(this.isModeSombre? 'dark':'light')
  }

  buttonClicked(type: 'light' | 'dark'): void { 
    this.headerEmitter.emit(type)
  }
}
