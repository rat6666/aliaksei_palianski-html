import {
  Component,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { Risk } from '../../../interfaces';
import { defaultRisk } from '../../../enums';

@Component({
  selector: 'app-calc-buttons',
  templateUrl: './calc-buttons.component.html',
  styleUrls: ['./calc-buttons.component.scss'],
})
export class CalcButtonsComponent implements OnChanges {
  unchangeRisk: Risk = defaultRisk;

  @Input() childMessage: Risk;

  // @Output() messageEvent = new EventEmitter<Risk>();

  ngOnChanges(changes: SimpleChanges): void {
    const chng = changes.childMessage;
    if (
      chng.previousValue !== this.unchangeRisk &&
      this.unchangeRisk.description === this.childMessage.description
    ) {
      this.unchangeRisk = this.childMessage;
    }
  }

  sendMessage(): void {
    console.log(this.unchangeRisk);
    // this.messageEvent.emit(this.unchangeRisk);
  }
}
