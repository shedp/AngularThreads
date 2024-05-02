import { Component, Input, signal } from '@angular/core';
import { ReplyFormComponent } from '../reply-form/reply-form.component';
import { CommonModule } from '@angular/common';
import { CommentService } from '../../services/comment.service';
import { Comment } from '../../interfaces/comment.interface';
import { CommentBoxComponent } from '../comment-box/comment-box.component';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [ReplyFormComponent, CommonModule, CommentBoxComponent],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css',
})
export class CommentComponent {
  @Input()
  comment!: Comment;

  constructor(public commentService: CommentService) {}
  commentsIsMore = false;

  nestedComments = signal<Comment[]>([]);

  ngOnInit(): void {
    this.getNestedComments();
  }
  getNestedComments() {
    this.commentService.getComments(this.comment._id).subscribe((comments) => {
      this.nestedComments.set(comments);
    });
  }
}
