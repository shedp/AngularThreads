import { Component, Input } from '@angular/core';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-reply-form',
  standalone: true,
  imports: [],
  templateUrl: './reply-form.component.html',
  styleUrl: './reply-form.component.css',
})
export class ReplyFormComponent {
  @Input()
  parentId!: string | null;

  constructor(public commentService: CommentService) {}
}
