/* eslint-disable default-case */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Risk, RiskCalculator, CalculatorErrors } from '../../interfaces';
import { SelectedRiskService } from '../../services/selected-risk.service';
import { DataBaseService } from '../../services/data-base.service';
import { typeSwitchs, defaultCalculatorErrors, defaultRiskCalculator } from '../../enums';

@Component({
  selector: 'app-risk-edit',
  templateUrl: './risk-edit.component.html',
  styleUrls: ['./risk-edit.component.scss'],
})
export class RiskEditComponent implements OnInit {
  public risk: Risk;

  public isMainPage = true;

  public calculatorErrors: CalculatorErrors = defaultCalculatorErrors;

  public calculator: RiskCalculator = defaultRiskCalculator;

  private initialRiskData: Risk;

  private inputTypeEvent: string;

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

  public postRisk(): void {
    this.dataBaseService.postRisk(this.risk);
  }

  public resetEditedRisk(): void {
    this.selectedRiskService.selectRisk(this.initialRiskData);
  }

  public riskCalculator(type: string): void {
    this.inputTypeEvent = type;
    switch (type) {
      case typeSwitchs.probability:
        this.calculator.setProbNull();
        break;
      case typeSwitchs.minProb:
      case typeSwitchs.maxProb:
        this.risk.probability = this.calculator.sumProb();
        break;
      case typeSwitchs.time:
        this.calculator.setTimeNull();
        break;
      case typeSwitchs.minTime:
      case typeSwitchs.maxTime:
        this.risk.time = this.calculator.sumTime();
        break;
    }
    this.riskCalculatorErrorsHandler(this.inputTypeEvent);
  }

  private riskCalculatorErrorsHandler(type: string): void {
    this.calculatorErrors.setFalse();
    switch (type) {
      case typeSwitchs.minProb:
        if (this.calculator.minProb > this.calculator.maxProb) {
          this.calculatorErrors.minProb = true;
        }
        break;
      case typeSwitchs.maxProb:
        if (this.calculator.maxProb < this.calculator.minProb) {
          this.calculatorErrors.maxProb = true;
        }
        break;
      case typeSwitchs.minTime:
        if (this.calculator.minTime > this.calculator.maxTime) {
          this.calculatorErrors.minTime = true;
        }
        break;
      case typeSwitchs.maxTime:
        if (this.calculator.maxTime < this.calculator.minTime) {
          this.calculatorErrors.maxTime = true;
        }
    }
  }
}
