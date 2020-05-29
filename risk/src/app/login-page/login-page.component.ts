import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { defaultUser } from '../shared/enums';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  public userName: string;

  public password: string;

  public constructor(private auth: AuthService) {}

  public logIn(): void {
    defaultUser.setUser(this.password, this.userName);
    this.auth.login(defaultUser);
  }

  public signIn(): void {
    defaultUser.setUser(this.password, this.userName);
    this.auth.register(defaultUser);
  }
}
