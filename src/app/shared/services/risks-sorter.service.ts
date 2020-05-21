/* eslint-disable no-case-declarations */
/* eslint-disable default-case */
import { Injectable } from '@angular/core';
import { Risk } from '../interfaces';

export function toSaveLowerCase(value: string): string {
  return value ? String(value).toLowerCase() : '';
}

@Injectable({
  providedIn: 'root',
})
export class RisksSorterService {
  public isRiskSortedByIncrease = false;

  public sort(riskList: Risk[], type: string): Risk[] {
    this.isRiskSortedByIncrease = !this.isRiskSortedByIncrease;
    return riskList.sort((risk, otherRisk) => {
      let result: boolean;
      switch (type) {
        case 'name':
          result = this.isRiskSortedByIncrease
            ? toSaveLowerCase(risk.riskName) <
              toSaveLowerCase(otherRisk.riskName)
            : toSaveLowerCase(risk.riskName) >
              toSaveLowerCase(otherRisk.riskName);
          break;
        case 'time':
          result = this.isRiskSortedByIncrease
            ? risk.time > otherRisk.time
            : risk.time < otherRisk.time;
          break;
        case 'probability':
          result = this.isRiskSortedByIncrease
            ? risk.probability > otherRisk.probability
            : risk.probability < otherRisk.probability;
          break;
      }
      return result ? 1 : -1;
    });
  }
}
