import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders
} from '@angular/common/http';

@Injectable()
export class ParamInterceptor implements HttpInterceptor {
  public intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const paramsReq = req.clone({
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
    return next.handle(paramsReq);
  }
}
