import { Component } from '@angular/core';
import { CommentOptionsComponent } from '../comment-options/comment-options.component';
import { ReplyFormComponent } from '../reply-form/reply-form.component';
import { CommonModule } from '@angular/common';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommentOptionsComponent, ReplyFormComponent, CommonModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css',
})
export class CommentComponent {
  constructor(public commentService: CommentService) {}
  commentsIsMore = false;
  comments = ['hereisacoments', 'here is another ocmments', 'a thrid'];

  showMoreComments = () => {
    if (this.comments.length > 3) {
      this.commentsIsMore = true;
    }
  };
}
