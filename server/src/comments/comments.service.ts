import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './schemas/comment.schema';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name) private commentModel: Model<Comment>,
  ) {}
  create(createCommentDto: CreateCommentDto) {
    const newComment = this.commentModel.create({
      text: createCommentDto.text,
      likes: createCommentDto.likes,
      parent: createCommentDto.parentId || null,
      user: createCommentDto.userId,
    });
    return newComment;
  }

  findAllParents() {
    return this.commentModel.find({ parent: null }).populate('user').exec();
  }

  findAllByParentId(parentId: string) {
    return this.commentModel
      .find({ parent: parentId })
      .populate('user', 'parent')
      .exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
