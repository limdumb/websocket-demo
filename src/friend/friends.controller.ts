import { Body, Controller, Get, Post } from '@nestjs/common';
import { FriendsService } from './friends.service';

export class CreateFriendsDto {
  id: number;
  nickName: string;
  imageURL: string;
}

@Controller('friend')
export class FriendController {
  constructor(private readonly friendsService: FriendsService) {}

  @Get()
  getFriends(): CreateFriendsDto[] {
    return this.friendsService.getFriends();
  }

  @Post()
  create(@Body() dto: CreateFriendsDto) {
    const result = this.friendsService.postFriends(dto);

    return result;
  }
}
