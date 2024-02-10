import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './profile.controller';

@Injectable()
export class ProfileService {
  private readonly profile: CreateProfileDto[] = [
    {
      id: 1,
      nickName: '임덤덤',
      imageUrl: 'https://newsimg.sedaily.com/2023/01/06/29KDCG06BP_1.jpg',
      intro: '안녕하세요 꾸미는걸 좋아하는 임덤덤 입니다.',
    },
  ];

  getProfile(id: number): CreateProfileDto {
    if (this.profile.some((item) => item.id !== id)) {
      throw new Error('ID does not exist.');
    }

    const result = this.profile.filter((el) => {
      return id === el.id;
    });

    return result[0];
  }
}
