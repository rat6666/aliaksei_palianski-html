import { Injectable } from '@angular/core';
import { Risk } from '../interfaces';

export function toSaveLowerCase(value: string): string {
  return value ? String(value).toLowerCase() : '';
}

@Injectable({
  providedIn: 'root'
})
export class RisksSorterService {
  public isRiskSortedByIncrease = false;

  public sort(riskList: Risk[], sortType: number): Risk[] {
    this.isRiskSortedByIncrease = !this.isRiskSortedByIncrease;
    return riskList.sort((risk, otherRisk) => {
      let result: boolean;
      switch (sortType) {
        case 0:
          result = this.isRiskSortedByIncrease
            ? toSaveLowerCase(risk.riskName) <
              toSaveLowerCase(otherRisk.riskName)
            : toSaveLowerCase(risk.riskName) >
              toSaveLowerCase(otherRisk.riskName);
          break;
        case 1:
          result = this.isRiskSortedByIncrease
            ? risk.time > otherRisk.time
            : risk.time < otherRisk.time;
          break;
        case 2:
          result = this.isRiskSortedByIncrease
            ? risk.probability > otherRisk.probability
            : risk.probability < otherRisk.probability;
          break;
      }
      return result ? 1 : -1;
    });
  }
}
