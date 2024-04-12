import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  @IsNotEmpty()
  text: string;

  @IsNumber()
  likes: number;

  @IsString()
  @IsNotEmpty()
  userId: string;

  parentId: null | string;
}
