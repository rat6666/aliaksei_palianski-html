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
      let riskType: string;
      let otherRisType: string;
      switch (type) {
        case 'name':
          riskType = toSaveLowerCase(risk.riskName);
          otherRisType = toSaveLowerCase(otherRisk.riskName);
          break;
        case 'time':
          riskType = toSaveLowerCase(risk.time);
          otherRisType = toSaveLowerCase(otherRisk.time);
          break;
        case 'probability':
          riskType = toSaveLowerCase(risk.prob);
          otherRisType = toSaveLowerCase(otherRisk.prob);
          break;
      }
      const result: boolean = this.isRiskSortedByIncrease
        ? riskType < otherRisType
        : riskType > otherRisType;
      return result ? 1 : -1;
    });
  }
}
