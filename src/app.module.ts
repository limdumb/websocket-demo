import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebsocketGateway } from './gateway/websocket.gateway';
import { FriendsService } from './friend/friends.service';
import { FriendController } from './friend/friends.controller';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';
import { ProfileController } from './profile/profile.controller';
import { ProfileService } from './profile/prefile.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    FriendController,
    PostController,
    ProfileController,
  ],
  providers: [
    AppService,
    WebsocketGateway,
    FriendsService,
    PostService,
    ProfileService,
  ],
})
export class AppModule {}
