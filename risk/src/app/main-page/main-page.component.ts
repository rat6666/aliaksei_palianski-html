import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SelectedRiskService } from '../shared/services/selected-risk.service';
import { Risk } from '../shared/interfaces';
import { defaultRisk } from '../shared/enums';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public risk$ = new Observable<Risk>();

  public selectedRisk: Risk;

  public constructor(private selectedRiskService: SelectedRiskService) {}

  public ngOnInit(): void {
    this.selectedRisk = defaultRisk;
    this.selectedRiskService.selectRisk(defaultRisk);
    this.risk$ = this.selectedRiskService.selectedRisk$;
  }
}
