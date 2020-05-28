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
  public selectedRisk: Risk;

  public constructor(private selectedRiskService: SelectedRiskService) {}

  public ngOnInit(): void {
    this.selectedRisk = defaultRisk;
    this.selectedRiskService.selectRisk(defaultRisk);
    this.selectedRiskService.selectedRisk$.subscribe((data) => {
      this.risk = data;
    });
  }
}
