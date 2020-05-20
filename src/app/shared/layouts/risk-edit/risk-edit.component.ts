import { Component, OnInit } from '@angular/core';
import { Risk } from '../../interfaces';
import { SelectedRiskService } from '../../services/selected-risk.service';

@Component({
  selector: 'app-risk-edit',
  templateUrl: './risk-edit.component.html',
  styleUrls: ['./risk-edit.component.scss'],
})
export class RiskEditComponent implements OnInit {
  constructor(private selectedRiskService: SelectedRiskService) {}

  public risk: Risk;

  private initialRiskData: Risk;

  ngOnInit(): void {
    this.selectedRiskService.selectedRisk$.subscribe((data: Risk) => {
      this.risk = JSON.parse(JSON.stringify(data));
      this.initialRiskData = data;
    });
  }

  updateEditedRisk(): void {
    this.selectedRiskService.updateRisk(this.risk);
  }

  resetEditedRisk(): void {
    this.selectedRiskService.selectRisk(this.initialRiskData);
  }
}
