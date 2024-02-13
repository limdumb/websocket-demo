import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FriendsService } from './friends.service';

export class CreateFriendsDto {
  id: number;
  nickName: string;
  imageURL: string;
  friendStatus: boolean;
}
// id값을 받아야 Friends에 request가 가능함
// + id값을 받아야 누구의 Friends List인지 확인이 가능함

@Controller('friends')
export class FriendController {
  constructor(private readonly friendsService: FriendsService) {}

  @Get()
  getFriends(@Param('id') id: string): CreateFriendsDto[] {
    return this.friendsService.getFriends(id);
  }

  @Post()
  create(@Body() dto: CreateFriendsDto, @Param('id') id: string) {
    const result = this.friendsService.postFriends(dto, id);

    return result;
  }
}
