import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthintercepterService implements HttpInterceptor {
  constructor(private router: Router) {  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const headersConfig = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': "*",
      Accept: 'application/json'
    };


    const _req = req.clone({ setHeaders: headersConfig });
    return next.handle(_req)
  }

}

