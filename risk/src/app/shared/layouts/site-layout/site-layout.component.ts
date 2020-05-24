import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { sessionStorageKey, defaultRisk } from '../../enums';
import { SelectedRiskService } from '../../services/selected-risk.service';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss'],
})
export class SiteLayoutComponent {
  constructor(
    private auth: AuthService,
    private router: Router,
    private selectedRiskService: SelectedRiskService
  ) {}

  images: any[];
  public userName: string = sessionStorage.getItem(sessionStorageKey.userName);

  public isMainPage = true;

  public onManagePage(): void {
    this.router.navigate(['manage']);
    this.selectedRiskService.selectRisk(defaultRisk);
    this.isMainPage = !this.isMainPage;
  }

  public onMainPage(): void {
    this.router.navigate(['main']);
    this.selectedRiskService.selectRisk(defaultRisk);
    this.isMainPage = !this.isMainPage;
  }

  public onLogout(): void {
    this.auth.logOut();
    this.router.navigate(['']);
  }
}
