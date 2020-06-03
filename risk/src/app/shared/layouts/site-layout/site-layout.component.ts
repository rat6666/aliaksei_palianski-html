import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { sessionStorageKey } from '../../enums';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss']
})
export class SiteLayoutComponent {
  public userName: string = sessionStorage.getItem(sessionStorageKey.userName);

  public isMainPage = true;

  public constructor(private auth: AuthService, private router: Router) {}

  public onManagePage(): void {
    this.router.navigate(['manage']);
    this.isMainPage = !this.isMainPage;
  }

  public onMainPage(): void {
    this.router.navigate(['main']);
    this.isMainPage = !this.isMainPage;
  }

  public logOut(): void {
    this.auth.logOut();
    this.router.navigate(['']);
  }
}
