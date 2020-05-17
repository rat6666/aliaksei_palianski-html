import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Risk } from 'src/app/shared/interfaces';
import { configAPI, sessionStorageKey } from 'src/app/shared/enums';
import { HttpClient } from '@angular/common/http';

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
