import { Component, OnInit } from '@angular/core';
import { SelectedRiskService } from '../shared/services/selected-risk.service';
import { Risk } from '../shared/interfaces';
import { defaultRisk } from '../shared/enums';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  public risk: Risk = defaultRisk;

  public constructor(private getSelectedRisk: SelectedRiskService) {}

  public ngOnInit(): void {
    this.getSelectedRisk.selectedRisk$.subscribe((data) => {
      this.risk = data;
    });
  }
}
