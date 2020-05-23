/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { configAPI, sessionStorageKey, defaultRisk } from '../enums';
import { Risk } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class DataBaseService {
  constructor(private httpClient: HttpClient) {}

  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  private options: Record<string, any> = { headers: this.headers };

  private riskList = new BehaviorSubject<Risk[]>([defaultRisk]);

  public getRiskList() {
    return this.httpClient
      .get(configAPI.urlRisksDatabase)
      .subscribe((data: Risk[]) => {
        this.riskList.next(data);
      });
  }

  public get streamRiskList$(): Observable<Record<string, any>> {
    this.getRiskList();
    return this.riskList.asObservable();
  }

  public deleteRisk(riskID: string): void {
    this.httpClient
      .delete(`${configAPI.urlRisksDatabase}${riskID}`)
      .subscribe(() => {
        this.getRiskList();
      });
  }

  public updateRiskList(risk: Risk): void {
    if (risk.id === 'newRisk') {
      this.httpClient
        .post(`${configAPI.urlRisksDatabase}`, risk, this.options)
        .subscribe(() => {
          this.getRiskList();
        });
    } else {
      this.httpClient
        .put(`${configAPI.urlRisksDatabase}${risk.id}`, risk, this.options)
        .subscribe(() => {
          this.getRiskList();
        });
    }
  }
}
