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
      let riskType: string;
      let otherRiskType: string;
      let result: boolean;
      switch (type) {
        case 'name':
          riskType = toSaveLowerCase(risk.riskName);
          otherRiskType = toSaveLowerCase(otherRisk.riskName);
          result = this.isRiskSortedByIncrease
            ? riskType < otherRiskType
            : riskType > otherRiskType;
          break;
        case 'time':
          riskType = risk.time;
          otherRiskType = otherRisk.time;
          result = this.isRiskSortedByIncrease
            ? +riskType > +otherRiskType
            : false;
          break;
        case 'probability':
          riskType = risk.prob;
          otherRiskType = otherRisk.prob;
          result = this.isRiskSortedByIncrease
            ? +riskType > +otherRiskType
            : false;
          break;
      }
      return result ? 1 : -1;
    });
  }
}
