import {
  ConnectedSocket,
  MessageBody,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { Logger } from '@nestjs/common';

@WebSocketGateway({ namespace: '/ws' })
export class WebsocketGateway implements OnGatewayInit {
  private logger: Logger = new Logger('ws');

  afterInit(): any {
    this.logger.log('ws initialized');
  }

  @SubscribeMessage('echo')
  handleEvent(@MessageBody() data: string, @ConnectedSocket() client: Socket) {
    this.logger.log(`got message ${data}`);
    client.emit('echo', data);
  }
}
