/* eslint-disable default-case */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private dataBaseService: DataBaseService,
    private router: Router
  ) {}

  public risk: Risk;

  private initialRiskData: Risk;

  public isMainPage = true;

  public calc: Calc = {
    minProb: null,
    maxProb: null,
    likeProb: null,
    minTime: null,
    maxTime: null,
    likeTime: null,
  };

  ngOnInit(): void {
    if (this.router.url === '/manage') {
      this.isMainPage = !this.isMainPage;
    }
    this.selectedRiskService.selectedRisk$.subscribe((data: Risk) => {
      this.risk = JSON.parse(JSON.stringify(data));
      this.initialRiskData = data;
    });
  }

  deleteRisk(): void {
    console.log(this.risk.id);
    this.dataBaseService.deleteRisk(this.risk.id);
  }

  updateEditedRisk(): void {
    this.dataBaseService.updateRiskList(this.risk);
  }

  resetEditedRisk(): void {
    this.selectedRiskService.selectRisk(this.initialRiskData);
  }
}
