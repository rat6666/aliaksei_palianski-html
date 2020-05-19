import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { configAPI, sessionStorageKey } from '../../enums';
import { Risk } from '../../interfaces';
import { RisksDataService } from '../../services/risks-data.service';

@Component({
  selector: 'app-risks-list',
  templateUrl: './risks-list.component.html',
  styleUrls: ['./risks-list.component.scss'],
})
export class RisksListComponent implements OnInit {
  risks: Risk[];

  selectedRisk: Risk;

  background = { background: 'white' };

  constructor(
    private httpClient: HttpClient,
    private dataService: RisksDataService
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

  sendMessage(item: Risk): void {
    this.selectedRisk = item;
    this.dataService.setRisk(item);
  }
}
