import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './profile.controller';

@Injectable()
export class ProfileService {
  private readonly friends: CreateProfileDto[] = [];

  getFriends(): CreateProfileDto[] {
    return this.friends;
  }

  postFriends(data: CreateProfileDto): string {
    this.friends.push(data);
    return 'success';
  }
}
