import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'client';
  userService = inject(UserService);
  constructor() {
    const user = this.userService.getUserFromStorage();
    if (!user) {
      const randomName = `user_${Math.ceil(Math.random() * 4000 + 1000)}`;
      let avatarUrl;
      this.userService.createUser(randomName).subscribe((user) => {
        console.log(`user created: ${user}`);
        this.userService.saveUserToStorage(user);
      });
    }
  }
}
