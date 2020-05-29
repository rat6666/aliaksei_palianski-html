import { Injectable } from '@angular/core';
import { typeSwitchs } from '../enums';
import { RiskCalculator, Risk } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class RiskCalculatorService {
  public riskCalculator(type: string, calculator: RiskCalculator, risk: Risk): void {
    switch (type) {
      case typeSwitchs.probability:
        calculator.setProbNull();
        break;
      case typeSwitchs.minProb:
      case typeSwitchs.maxProb:
        risk.probability = calculator.sumProb();
        break;
      case typeSwitchs.time:
        calculator.setTimeNull();
        break;
      case typeSwitchs.minTime:
      case typeSwitchs.maxTime:
        risk.time = calculator.sumTime();
        break;
    }
  }
}
