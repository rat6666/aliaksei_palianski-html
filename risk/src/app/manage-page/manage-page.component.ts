import { Component, OnInit } from '@angular/core';
import { SelectedRiskService } from '../shared/services/selected-risk.service';
import { defaultRisk } from '../shared/enums';
import { Risk } from '../shared/interfaces';

@Component({
  selector: 'app-manage-page',
  templateUrl: './manage-page.component.html',
  styleUrls: ['./manage-page.component.scss'],
})
export class ManagePageComponent implements OnInit {
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
