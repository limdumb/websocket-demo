import { Injectable } from '@nestjs/common';
import { CreateFriendsDto } from './friends.controller';

export class AllFriendsDto {
  id: string;
  friends: CreateFriendsDto[];
}

@Injectable()
export class FriendsService {
  private readonly friends: AllFriendsDto[] = [];

  getFriends(id: string): CreateFriendsDto[] {
    const response = this.friends.filter((el) => {
      return id === el.id;
    });

    return response[0].friends;
  }

  postFriends(data: CreateFriendsDto, id: string): string {
    const response = this.friends.filter((el) => {
      return id === el.id;
    });

    response[0].friends.push(data);
    return 'success';
  }
}
