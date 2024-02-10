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
  getProfile(id: string): CreateProfileDto {
    return this.friendsService.getProfile(Number(id));
  }
  getId(@Param() params: string) {
    this.getProfile(params);
  }
}
