import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SelectedRiskService } from '../shared/services/selected-risk.service';
import { defaultRisk } from '../shared/enums';
import { Risk } from '../shared/interfaces';

@Component({
  selector: 'app-manage-page',
  templateUrl: './manage-page.component.html',
  styleUrls: ['./manage-page.component.scss']
})
export class ManagePageComponent implements OnInit {
  public risk$ = new Observable<Risk>();

  public selectedRisk: Risk;

  public constructor(private selectedRiskService: SelectedRiskService) {}

  public ngOnInit(): void {
    this.selectedRisk = defaultRisk;
    this.selectedRiskService.selectRisk(defaultRisk);
    this.risk$ = this.selectedRiskService.selectedRisk$;
  }
}
