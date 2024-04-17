import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CommentComponent } from '../components/comment/comment.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CommentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
