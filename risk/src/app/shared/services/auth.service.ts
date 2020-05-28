import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces';
import { configAPI, sessionStorageKey } from '../enums';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  private options: Record<string, unknown> = { headers: this.headers };

  public constructor(private httpClient: HttpClient) {}

  public register(user: User): Observable<Record<string, any>> {
    return this.httpClient.post(configAPI.urlUsersDatabase, user, this.options);
  }

  public login(user: User): Observable<string> {
    return new Observable((observer) => {
      this.httpClient.get(configAPI.urlUsersDatabase).subscribe((data: User[]) => {
        if (
          data.filter((el) => {
            if (user.username === el.username && user.password === el.password) {
              sessionStorage.setItem(sessionStorageKey.userName, el.username);
              sessionStorage.setItem(sessionStorageKey.id, el.id);
              return true;
            }
            return false;
          })
        ) {
          observer.next(user.username);
        }
        observer.error(Error);
      });
    });
  }

  public get isAuthenticate(): boolean {
    return !!sessionStorage.getItem(sessionStorageKey.id);
  }

  public logOut(): void {
    sessionStorage.clear();
  }
}
