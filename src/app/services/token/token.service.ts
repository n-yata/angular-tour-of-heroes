import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { jwtDecode } from 'jwt-decode';

export const authGuard: CanActivateFn = () => {
  let token = localStorage.getItem('access_token');

  const tokenService = inject(TokenService);
  const route = inject(Router);

  if (token == null) {
    token = '';
  }

  if (tokenService.isTokenExpired(token)) {
  }

  return route.navigate(['/systemError']);
};

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  /**
   * アクセストークンの有効期限が切れているかを確認する
   * @param accessToken アクセストークン
   * @returns true：有効期限切れ、false：有効期限内
   */
  isTokenExpired(accessToken: string): boolean {
    const decoded: any = jwtDecode(accessToken);
    const now = Date.now() / 1000;

    return decoded.exp < now;
  }
}
