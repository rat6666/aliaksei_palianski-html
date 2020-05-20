import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { configAPI, sessionStorageKey } from '../../enums';
import { Risk } from '../../interfaces';
import { SelectedRiskService } from '../../services/selected-risk.service';
import { RisksSorterService } from '../../services/risks-sorter.service';

@Component({
  selector: 'app-risks-list',
  templateUrl: './risks-list.component.html',
  styleUrls: ['./risks-list.component.scss'],
})
export class RisksListComponent implements OnInit {
  risks: Risk[];

  selectedRisk: Risk;

  constructor(
    private httpClient: HttpClient,
    private dataService: SelectedRiskService,
    private risksSorter: RisksSorterService
  ) {}

  ngOnInit(): void {
    this.httpClient
      .get(
        `${configAPI.urlDatabase}${sessionStorage.getItem(
          sessionStorageKey.id
        )}`
      )
      .subscribe((data: Record<string, any>) => {
        this.risks = Object.values(data.risks);
      });
  }

  public sort(type: string): void {
    this.risks = this.risksSorter.sort(this.risks, type);
  }

  public sendMessage(item: Risk): void {
    this.selectedRisk = item;
    this.dataService.selectRisk(item);
  }
}
