import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostService } from './post.service';

export class CreatePostDto {
  user: {
    id: number;
    nickName: string;
    imageUrl: string;
  };
  contents: string;
  likes: number;
  comments: [
    {
      user: {
        id: number;
        nickName: string;
        imageUrl: string;
      };
      contents: string;
    },
  ];
}

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  getPost(): CreatePostDto[] {
    return this.postService.getPosts();
  }

  @Post()
  create(@Body() dto: CreatePostDto) {
    const result = this.postService.createPost(dto);

    return result;
  }
}
