import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Risk } from '../interfaces';
import { defaultRisk } from '../enums';

@Injectable({
  providedIn: 'root',
})
export class RisksDataService {
  private risk = new BehaviorSubject<Risk>(defaultRisk);

  getRisk(): Observable<Risk> {
    return this.risk.asObservable();
  }

  setRisk(data: Risk): void {
    this.risk.next(data);
  }
}
