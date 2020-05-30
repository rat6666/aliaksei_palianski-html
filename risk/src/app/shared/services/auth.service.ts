import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { User } from '../interfaces';
import { configAPI, sessionStorageKey } from '../enums';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  private options: Record<string, unknown> = { headers: this.headers };

  public constructor(private httpClient: HttpClient, private router: Router) {}

  public register(user: User): void {
    this.httpClient
      .post(configAPI.urlUsersDatabase, user, this.options)
      .pipe(take(1))
      .subscribe(
        () => {
          sessionStorage.setItem(sessionStorageKey.id, user.id);
          sessionStorage.setItem(sessionStorageKey.userName, user.username);
          this.router.navigate(['main']);
        },
        () => {
          sessionStorage.clear();
        }
      );
  }

  public login(user: User): void {
    this.httpClient
      .get(configAPI.urlUsersDatabase)
      .pipe(take(1))
      .subscribe((data: User[]) => {
        data.filter((el: User) => {
          if (user.username === el.username && user.password === el.password) {
            sessionStorage.setItem(sessionStorageKey.userName, el.username);
            sessionStorage.setItem(sessionStorageKey.id, el.id);
            this.router.navigate(['main']);
          }
          return false;
        });
      });
  }

  public get isAuthentificated(): boolean {
    return !!sessionStorage.getItem(sessionStorageKey.id);
  }

  public logOut(): void {
    sessionStorage.clear();
  }
}
