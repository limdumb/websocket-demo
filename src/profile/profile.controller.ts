import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProfileService } from './prefile.service';

export class CreateProfileDto {
  id: number;
  nickName: string;
  imageUrl: string;
  intro: string;
  posts: {
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
  };
}

@Controller('profile')
export class ProfileController {
  constructor(private readonly friendsService: ProfileService) {}

  @Get()
  getFriends(): CreateProfileDto[] {
    return this.friendsService.getFriends();
  }

  @Post()
  create(@Body() dto: CreateProfileDto) {
    const result = this.friendsService.postFriends(dto);

    return result;
  }
}
