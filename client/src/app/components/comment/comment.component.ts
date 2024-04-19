import { Component } from '@angular/core';
import { CommentOptionsComponent } from '../comment-options/comment-options.component';
import { ReplyFormComponent } from '../reply-form/reply-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommentOptionsComponent, ReplyFormComponent, CommonModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css',
})
export class CommentComponent {
  isReplyExpanded = false;
  commentsIsMore = false;
  comments = ['hereisacoments', 'here is another ocmments', 'a thrid'];

  toggleReplyExpanded = () => {
    this.isReplyExpanded = !this.isReplyExpanded;
  };

  showMoreComments = () => {
    if (this.comments.length > 3) {
      this.commentsIsMore = true;
    }
  };
}
