import { Component, Input } from '@angular/core';
import { Risk } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-risk-description',
  templateUrl: './risk-description.component.html',
  styleUrls: ['./risk-description.component.scss'],
})
export class RiskDescriptionComponent {
  @Input('childMessage') riskd: Risk;

  onriskDescriprionChange(): void {
    // console.log(this.riskd.description);
  }
}
