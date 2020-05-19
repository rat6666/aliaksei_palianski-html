import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss'],
})
export class SiteLayoutComponent {
  constructor(private auth: AuthService, private router: Router) {}

  onSubmit(): void {
    this.auth.logOut();
    this.router.navigate(['']);
  }
}
