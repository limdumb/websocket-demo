import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './post.controller';

@Injectable()
export class PostService {
  private readonly posts: CreatePostDto[] = [
    {
      user: {
        id: 1,
        nickName: '@dumb_Lim',
        imageUrl: '이미지에요',
      },
      contents: '너무이쁘죠 게시글!',
      likes: 3,
      comments: [
        {
          user: {
            id: 1,
            nickName: '@gogogo',
            imageUrl: '이미지에요',
          },
          contents: '너무이쁘네요!',
        },
      ],
    },
  ];

  getPosts(): CreatePostDto[] {
    return this.posts;
  }

  createPost(dto: CreatePostDto) {
    this.posts.push(dto);
    return 'success';
  }
}
