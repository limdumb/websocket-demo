import { Controller, Get, Param } from '@nestjs/common';
import { ProfileService } from './prefile.service';

export class CreateProfileDto {
  id: number;
  nickName: string;
  imageUrl: string;
  intro: string;
}

@Controller('profile')
export class ProfileController {
  constructor(private readonly friendsService: ProfileService) {}

  @Get(':id')
  getProfile(@Param('id') id: string): CreateProfileDto {
    if (isNaN(Number(id))) {
      throw new Error('잘못된 접근입니다');
    }

    return this.friendsService.getProfile(Number(id));
  }

  getId(@Param() params: string) {
    this.getProfile(params);
  }
}
