import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { User } from '../shared/interfaces';
import { sessionStorageKey, defaultUser } from '../shared/enums';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  public wrongPassword = false;

  public registerFailed = false;

  public userName: string;

  public password: string;

  private user: User = defaultUser;

  public constructor(private auth: AuthService, private router: Router) {}

  public logIn(): void {
    this.user.username = this.userName;
    this.user.password = this.password;
    this.auth.login(this.user).subscribe(
      () => this.router.navigate(['main']),
      () => (this.wrongPassword = true)
    );
  }

  public signIn(): void {
    this.user.username = this.userName;
    this.user.password = this.password;
    this.auth.register(this.user).subscribe(
      (user: User) => {
        sessionStorage.setItem(sessionStorageKey.id, user.id);
        sessionStorage.setItem(sessionStorageKey.userName, user.username);
        this.router.navigate(['main']);
      },
      () => {
        sessionStorage.clear();
        this.registerFailed = true;
      }
    );
  }
}
