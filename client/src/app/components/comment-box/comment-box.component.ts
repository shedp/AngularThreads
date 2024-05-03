import { Component, Input } from '@angular/core';
import { Comment } from '../../interfaces/comment.interface';
import { CommentService } from '../../services/comment.service';
import { ReplyFormComponent } from '../reply-form/reply-form.component';

@Component({
  selector: 'app-comment-box',
  standalone: true,
  imports: [ReplyFormComponent],
  templateUrl: './comment-box.component.html',
  styleUrl: './comment-box.component.css',
})
export class CommentBoxComponent {
  @Input()
  comment!: Comment;

  constructor(public commentService: CommentService) {}
}
