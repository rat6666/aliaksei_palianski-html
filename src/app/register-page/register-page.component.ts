import { Component } from '@angular/core';
import { timer, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { User } from '../shared/interfaces';
import { sessionStorageKey } from '../shared/enums';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent {
  user: string;

  password: string;

  registerFailed = false;

  registerFailedTimer: Observable<number> = timer(3000);

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit(): void {
    const user: User = {
      id: null,
      username: this.user,
      password: this.password,
      risks: [],
    };
    this.auth.register(user).subscribe(
      (data: User) => {
        sessionStorage.setItem(sessionStorageKey.id, data.id);
        this.router.navigate(['/risk']);
      },
      () => {
        sessionStorage.clear();
        this.registerFailed = true;
        this.registerFailedTimer.subscribe(() => (this.registerFailed = false));
      }
    );
  }
}
