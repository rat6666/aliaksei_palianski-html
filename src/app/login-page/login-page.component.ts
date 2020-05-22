import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, timer, Observable } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { User } from '../shared/interfaces';
import { sessionStorageKey } from '../shared/enums';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit, OnDestroy {
  wrongPassword = false;

  registerFailed = false;

  wrongInputTimer: Observable<number> = timer(3000);

  user: string;

  password: string;

  aSub: Subscription;

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnDestroy(): void {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      if (params.registered) {
        // console.log('registered');
      } else if (params.accessDenied) {
        // console.log('accessDenied');
      }
    });
  }

  logIn(): void {
    const user: User = {
      id: null,
      username: this.user,
      password: this.password,
    };
    this.aSub = this.auth.login(user).subscribe(
      () => this.router.navigate(['main']),
      () => (this.wrongPassword = true)
    );
    this.wrongInputTimer.subscribe(() => (this.wrongPassword = false));
  }

  signIn(): void {
    const user: User = {
      id: null,
      username: this.user,
      password: this.password,
    };
    this.auth.register(user).subscribe(
      (userID: User) => {
        sessionStorage.setItem(sessionStorageKey.id, userID.id);
        this.router.navigate(['/risk']);
      },
      () => {
        sessionStorage.clear();
        this.registerFailed = true;
        this.wrongInputTimer.subscribe(() => (this.registerFailed = false));
      }
    );
  }
}
