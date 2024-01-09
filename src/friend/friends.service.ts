import { Injectable } from '@nestjs/common';
import { CreateFriendsDto } from './friends.controller';

@Injectable()
export class FriendsService {
  /*
      1. 휘발성
      2. 서버를 여러개를 띄울때는 다른서버에는 값이없음
  */
  private readonly friends: CreateFriendsDto[] = [];

  getFriends(): CreateFriendsDto[] {
    return this.friends;
  }

  postFriends(data: CreateFriendsDto): string {
    this.friends.push(data);
    return 'success';
  }
}
