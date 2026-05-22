import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export const httpInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> => {
  const login = sessionStorage.getItem('login');
  req.headers.set('Content-Type', 'login');
  console.log('request updated with header');
  return next(req).pipe(
    tap((event: HttpEvent<unknown>) => {
      console.log('http response =>', event);
    }),
  );
};
