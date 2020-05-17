import { Component } from '@angular/core';
import { Risk } from '../shared/interfaces';
import { defaultRisk } from '../shared/enums';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  risk: Risk = defaultRisk;

  receiveMessage($event: Risk): void {
    this.risk = $event;
  }
}
