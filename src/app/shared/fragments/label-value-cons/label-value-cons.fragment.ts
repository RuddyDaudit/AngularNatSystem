import { Component, input, InputSignal } from '@angular/core';
import { ValueToStringPipe } from '../../pipes/value-to-string-pipe';
export interface LabelValue {
  label: string;
  value: unknown;
}
@Component({
  selector: 'app-label-value-cons',
  imports: [ValueToStringPipe],
  templateUrl: './label-value-cons.fragment.html',
  styleUrl: './label-value-cons.fragment.scss',
})
export class LabelValueConsFragment {
  value: InputSignal<LabelValue[]> = input.required();
  labelWidth: InputSignal<string> = input();
}
