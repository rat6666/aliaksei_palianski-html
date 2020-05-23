/* eslint-disable default-case */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Risk, Calc } from '../../interfaces';
import { SelectedRiskService } from '../../services/selected-risk.service';
import { DataBaseService } from '../../services/data-base.service';
import { typeSwitchs } from '../../enums';

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

  public onChange(type: string): void {
    switch (type) {
      case typeSwitchs.probability:
        this.calc.minProb = null;
        this.calc.maxProb = null;
        break;
      case typeSwitchs.minProb:
        this.risk.probability = (this.calc.minProb + this.calc.maxProb) / 2;
        break;
      case typeSwitchs.maxProb:
        this.risk.probability = (this.calc.minProb + this.calc.maxProb) / 2;
        break;
      case typeSwitchs.time:
        this.calc.minTime = null;
        this.calc.maxTime = null;
        break;
      case typeSwitchs.minTime:
        this.risk.time = (this.calc.minTime + this.calc.maxTime) / 2;
        break;
      case typeSwitchs.maxTime:
        this.risk.time = (this.calc.minTime + this.calc.maxTime) / 2;
        break;
    }
  }

  public deleteRisk(): void {
    console.log(this.risk.id);
    this.dataBaseService.deleteRisk(this.risk.id);
  }

  public updateEditedRisk(): void {
    this.dataBaseService.updateRiskList(this.risk);
  }

  public resetEditedRisk(): void {
    this.selectedRiskService.selectRisk(this.initialRiskData);
  }
}
