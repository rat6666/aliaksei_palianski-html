import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { configAPI, defaultRisk } from '../enums';
import { Risk } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {
  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  private options: Record<string, unknown> = { headers: this.headers };

  private riskList = new BehaviorSubject<Risk[]>([defaultRisk]);

  public constructor(private httpClient: HttpClient) {}

  public getRiskList(): Subscription {
    return this.httpClient
      .get(configAPI.urlRisksDatabase)
      .pipe(take(1))
      .subscribe((data: Risk[]) => {
        this.riskList.next(data);
      });
  }

  public get streamRiskList$(): Observable<Risk[]> {
    this.getRiskList();
    return this.riskList.asObservable();
  }

  public deleteRisk(riskID: string): void {
    this.httpClient
      .delete(`${configAPI.urlRisksDatabase}${riskID}`)
      .pipe(take(1))
      .subscribe(() => {
        this.getRiskList();
      });
  }

  public postRisk(risk: Risk): void {
    this.httpClient
      .post(configAPI.urlRisksDatabase, risk, this.options)
      .pipe(take(1))
      .subscribe(() => {
        this.getRiskList();
      });
  }

  public updateRiskList(risk: Risk): void {
    this.httpClient
      .put(`${configAPI.urlRisksDatabase}${risk.id}`, risk, this.options)
      .pipe(take(1))
      .subscribe(() => {
        this.getRiskList();
      });
  }
}
