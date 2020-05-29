import { Injectable } from '@angular/core';
import { CalculatorErrors, RiskCalculator } from '../interfaces';
import { typeSwitchs } from '../enums';

@Injectable({
  providedIn: 'root',
})
export class RiskCalculatorErrorService {
  public riskCalculatorErrorsHandler(type: string, calculatorErrors: CalculatorErrors, calculator: RiskCalculator): void {
    calculatorErrors.setFalse();
    switch (type) {
      case typeSwitchs.minProb:
        if (calculator.minProb > calculator.maxProb) {
          calculatorErrors.minProb = true;
        }
        break;
      case typeSwitchs.maxProb:
        if (calculator.maxProb < calculator.minProb) {
          calculatorErrors.maxProb = true;
        }
        break;
      case typeSwitchs.minTime:
        if (calculator.minTime > calculator.maxTime) {
          calculatorErrors.minTime = true;
        }
        break;
      case typeSwitchs.maxTime:
        if (calculator.maxTime < calculator.minTime) {
          calculatorErrors.maxTime = true;
        }
    }
  }
}
