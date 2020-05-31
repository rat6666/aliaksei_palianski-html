import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SubscriptionLike } from 'rxjs';
import { Risk } from '../../interfaces';
import { SelectedRiskService } from '../../services/selected-risk.service';
import { RisksSorterService } from '../../services/risks-sorter.service';
import { DataBaseService } from '../../services/data-base.service';
import { sessionStorageKey, defaultAddRisk, defaultRisk, SortType } from '../../enums';

@Component({
  selector: 'app-risks-list',
  templateUrl: './risks-list.component.html',
  styleUrls: ['./risks-list.component.scss']
})
export class RisksListComponent implements OnInit, OnDestroy {
  public risks: Risk[];

  public sortType = SortType;

  public selectedRisk: Risk;

  public isMainPage = true;

  private userID = sessionStorage.getItem(sessionStorageKey.id);

  private subscription: SubscriptionLike;

  public constructor(
    private selectedRiskService: SelectedRiskService,
    private risksSorter: RisksSorterService,
    private dataBaseService: DataBaseService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    if (this.router.url === '/manage') {
      this.isMainPage = !this.isMainPage;
    }
    this.subscription = this.dataBaseService.streamRiskList$.subscribe((data: Risk[]) => {
      this.risks = data.filter(el => el.userID === this.userID);
    });
  }

  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }

  public sort(sortType: number): void {
    this.risks = this.risksSorter.sort(this.risks, sortType);
  }

  public addRisk(): void {
    defaultAddRisk.userID = sessionStorage.getItem(sessionStorageKey.id);
    this.selectedRiskService.selectRisk(defaultAddRisk);
  }

  public selectRisk(item: Risk): void {
    if (this.selectedRisk === defaultRisk || this.selectedRisk !== item) {
      this.selectedRisk = item;
      this.selectedRiskService.selectRisk(item);
    } else {
      this.selectedRisk = defaultRisk;
      this.selectedRiskService.selectRisk(defaultRisk);
    }
  }
}
