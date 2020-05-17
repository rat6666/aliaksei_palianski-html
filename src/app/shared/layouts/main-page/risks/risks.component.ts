import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { configAPI, sessionStorageKey } from '../../../enums';
import { Risk } from '../../../interfaces';

@Component({
  selector: 'app-main-page-risks',
  templateUrl: './risks.component.html',
  styleUrls: ['./risks.component.scss'],
})
export class RisksComponent implements OnInit {
  risks: Risk[];

  background = { background: 'white' };

  constructor(private httpClient: HttpClient) {}

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

  @Output() messageEvent = new EventEmitter<Risk>();

  sendMessage(item: Risk): void {
    this.messageEvent.emit(item);
  }
}
