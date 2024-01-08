import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebsocketGateway } from './gateway/websocket.gateway';
import { FriendsService } from './friend/friends.module';
import { FriendController } from './friend/friends.controller';

@Module({
  imports: [],
  controllers: [AppController, FriendController],
  providers: [AppService, WebsocketGateway, FriendsService],
})
export class AppModule {}
