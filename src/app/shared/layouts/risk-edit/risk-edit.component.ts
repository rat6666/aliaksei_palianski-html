import { Component, OnInit } from '@angular/core';
import { Risk, Calc } from '../../interfaces';
import { SelectedRiskService } from '../../services/selected-risk.service';
import { DataBaseService } from '../../services/data-base.service';

@Component({
  selector: 'app-risk-edit',
  templateUrl: './risk-edit.component.html',
  styleUrls: ['./risk-edit.component.scss'],
})
export class RiskEditComponent implements OnInit {
  constructor(
    private selectedRiskService: SelectedRiskService,
    private dataBaseService: DataBaseService
  ) {}

  public risk: Risk;

  private initialRiskData: Risk;

  public calc: Calc = {
    minProb: null,
    maxProb: null,
    likeProb: null,
    minTime: null,
    maxTime: null,
    likeTime: null,
  };

  ngOnInit(): void {
    this.selectedRiskService.selectedRisk$.subscribe((data: Risk) => {
      this.risk = JSON.parse(JSON.stringify(data));
      this.initialRiskData = data;
      this.calc.likeProb = +this.risk.probability;
      this.calc.likeTime = +this.risk.time;
    });
  }

  updateEditedRisk(): void {
    this.dataBaseService.updateRiskList(this.risk);
  }

  resetEditedRisk(): void {
    this.selectedRiskService.selectRisk(this.initialRiskData);
  }
}
