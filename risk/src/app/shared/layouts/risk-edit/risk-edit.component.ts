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
  public risk: Risk;

  public isMainPage = true;

  public errorMaxTime = false;
  public errorMaxProb = false;

  public errorMinTime = false;
  public errorMinProb = false;

  public calc: Calc = {
    minProb: null,
    maxProb: null,
    likeProb: null,
    minTime: null,
    maxTime: null,
    likeTime: null,
  };
  private initialRiskData: Risk;

  public constructor(private selectedRiskService: SelectedRiskService, private dataBaseService: DataBaseService, private router: Router) {}

  public ngOnInit(): void {
    if (this.router.url === '/manage') {
      this.isMainPage = !this.isMainPage;
    }
    this.selectedRiskService.selectedRisk$.subscribe((data: Risk) => {
      this.risk = JSON.parse(JSON.stringify(data));
      this.initialRiskData = data;
    });
  }

  public deleteRisk(): void {
    this.dataBaseService.deleteRisk(this.risk.id);
  }

  public updateEditedRisk(): void {
    this.dataBaseService.updateRiskList(this.risk);
  }
  public resetEditedRisk(): void {
    this.selectedRiskService.selectRisk(this.initialRiskData);
  }

  public calcRisk(type: string): void {
    switch (type) {
      case typeSwitchs.probability:
        this.calc.minProb = null;
        this.calc.maxProb = null;
        this.errorMinProb = false;
        this.errorMaxProb = false;
        break;
      case typeSwitchs.minProb:
        this.risk.probability = (this.calc.minProb + this.calc.maxProb) / 2;
        if (this.calc.minProb > this.calc.maxProb) {
          this.errorMinProb = true;
          this.errorMaxProb = false;
        } else {
          this.errorMinProb = false;
          this.errorMaxProb = false;
        }
        break;
      case typeSwitchs.maxProb:
        this.risk.probability = (this.calc.minProb + this.calc.maxProb) / 2;
        if (this.calc.maxProb < this.calc.minProb) {
          this.errorMaxProb = true;
          this.errorMinProb = false;
        } else {
          this.errorMinProb = false;
          this.errorMaxProb = false;
        }
        break;
      case typeSwitchs.time:
        this.calc.minTime = null;
        this.calc.maxTime = null;
        this.errorMinTime = false;
        this.errorMaxTime = false;
        break;
      case typeSwitchs.minTime:
        this.risk.time = (this.calc.minTime + this.calc.maxTime) / 2;
        if (this.calc.minTime > this.calc.maxTime) {
          this.errorMinTime = true;
          this.errorMaxTime = false;
        } else {
          this.errorMinTime = false;
          this.errorMaxTime = false;
        }
        break;
      case typeSwitchs.maxTime:
        this.risk.time = (this.calc.minTime + this.calc.maxTime) / 2;
        if (this.calc.maxTime < this.calc.minTime) {
          this.errorMaxTime = true;
          this.errorMinTime = false;
        } else {
          this.errorMinTime = false;
          this.errorMaxTime = false;
        }
        break;
    }
  }
}
