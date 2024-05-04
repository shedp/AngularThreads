import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID, inject } from '@angular/core';
import { environment } from '../environment';
import { User } from '../interfaces/user.interface';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http = inject(HttpClient);
  localStorageKey = 'threads_user';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  createUser(name: string, avatarUrl?: string) {
    return this.http.post<User>(`${environment.apiBaseUrl}/users/`, {
      name,
    });
  }

  saveUserToStorage(user: User) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.localStorageKey, JSON.stringify(user));
    }
  }

  getUserFromStorage() {
    if (isPlatformBrowser(this.platformId)) {
      const userString = localStorage.getItem(this.localStorageKey);
      return userString ? (JSON.parse(userString) as User) : null;
    }
    return null;
  }
}
