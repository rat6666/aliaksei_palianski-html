import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Risk } from '../interfaces';
import { defaultRisk } from '../enums';

@Injectable({
  providedIn: 'root',
})
export class SelectedRiskService {
  private risk = new BehaviorSubject<Risk>(defaultRisk);

  get selectedRisk$(): Observable<Risk> {
    return this.risk.asObservable();
  }

  updateRisk(risk: Risk): void {
    console.log(risk);
  }

  selectRisk(data: Risk): void {
    this.risk.next(data);
  }
}
