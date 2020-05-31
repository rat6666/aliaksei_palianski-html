import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SubscriptionLike } from 'rxjs';
import { Risk, RiskCalculator, CalculatorErrors } from '../../interfaces';
import { SelectedRiskService } from '../../services/selected-risk.service';
import { DataBaseService } from '../../services/data-base.service';
import { defaultCalculatorErrors, defaultRiskCalculator } from '../../enums';
import { RiskCalculatorService } from '../../services/risk-calculator.service';
import { RiskCalculatorErrorService } from '../../services/risk-calculator-error.service';

@Component({
  selector: 'app-risk-edit',
  templateUrl: './risk-edit.component.html',
  styleUrls: ['./risk-edit.component.scss']
})
export class RiskEditComponent implements OnInit, OnDestroy {
  public risk: Risk;

  public isMainPage = true;

  public calculatorErrors: CalculatorErrors = defaultCalculatorErrors;

  public calculator: RiskCalculator = defaultRiskCalculator;

  private initialRiskData: Risk;

  private subscription: SubscriptionLike;

  public constructor(
    private selectedRiskService: SelectedRiskService,
    private dataBaseService: DataBaseService,
    private router: Router,
    private riskCalculatorService: RiskCalculatorService,
    private riskCalculatorErrorService: RiskCalculatorErrorService
  ) {}

  public ngOnInit(): void {
    if (this.router.url === '/manage') {
      this.isMainPage = !this.isMainPage;
    }
    this.subscription = this.selectedRiskService.selectedRisk$.subscribe((data: Risk) => {
      this.risk = JSON.parse(JSON.stringify(data));
      this.initialRiskData = data;
    });
  }

  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
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
    this.riskCalculatorService.riskCalculator(type, this.calculator, this.risk);
    this.riskCalculatorErrorService.riskCalculatorErrorsHandler(type, this.calculatorErrors, this.calculator);
  }
}
