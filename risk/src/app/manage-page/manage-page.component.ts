import { Component, OnInit } from '@angular/core';
import { SelectedRiskService } from '../shared/services/selected-risk.service';
import { defaultRisk } from '../shared/enums';
import { Risk } from '../shared/interfaces';

@Component({
  selector: 'app-manage-page',
  templateUrl: './manage-page.component.html',
  styleUrls: ['./manage-page.component.scss'],
})
export class ManagePageComponent implements OnInit {
  constructor(private getSelectedRisk: SelectedRiskService) {}

  risk: Risk = defaultRisk;
  ngOnInit() {
    this.getSelectedRisk.selectedRisk$.subscribe((data) => {
      this.risk = data;
    });
  }
}
