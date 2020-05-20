import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces';
import { configAPI, sessionStorageKey } from '../enums';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private httpClient: HttpClient) {}

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  options: Record<string, any> = { headers: this.headers };

  register(user: User): Observable<Record<string, any>> {
    return this.httpClient.post(configAPI.urlDatabase, user, this.options);
  }

  login(user: User): Observable<string> {
    return new Observable((observer) => {
      this.httpClient.get(configAPI.urlDatabase).subscribe((data: User[]) => {
        if (
          data.filter((el) => {
            if (
              user.username === el.username &&
              user.password === el.password
            ) {
              sessionStorage.setItem(sessionStorageKey.id, el.id);
              return true;
            }
            return false;
          })
        ) {
          observer.next(user.username);
        }
        observer.error('error');
      });
    });
  }
}
