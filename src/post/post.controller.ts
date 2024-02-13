import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostService } from './post.service';

export class CreatePostResponseType {
  user: {
    id: number;
    nickName: string;
    imageUrl: string;
  };
  contents: string;
}

export class CreatePostDto {
  user: {
    id: number;
    nickName: string;
    imageUrl: string;
  };
  contents: string;
  likes: number;
  comments:
    | [
        {
          user: {
            id: number;
            nickName: string;
            imageUrl: string;
          };
          contents: string;
        },
      ]
    | [];
}

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get(':id')
  getPost(): CreatePostDto[] {
    return this.postService.getPosts();
  }

  @Post()
  create(@Body() dto: CreatePostResponseType) {
    const dtoResult: CreatePostDto = {
      user: dto.user,
      contents: dto.contents,
      likes: 0,
      comments: [],
    };
    const result = this.postService.createPost(dtoResult);

    return result;
  }
}
