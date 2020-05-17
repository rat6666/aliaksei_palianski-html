import { Component, Input } from '@angular/core';
import { Risk } from '../../../interfaces';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  @Input() childMessage: Risk;
}
