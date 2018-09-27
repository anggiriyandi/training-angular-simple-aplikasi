import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor() { }

  isLogin(): boolean {
    if (localStorage.getItem('token') != null &&
    localStorage.getItem('userInfo') != null) {
     return true;
    }
    return false;
  }

  login(username: string, password: string): boolean {
    if ( username === 'anggi' && password === '123') {

      localStorage.setItem('token' , 'asdf123');
      localStorage.setItem('userInfo', JSON.stringify({
        'username' : 'anggi',
        'fullname' : 'anggi'
      }));
      return true;
    }

    return false;
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
  }

}
