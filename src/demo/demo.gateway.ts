import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer, ConnectedSocket } from '@nestjs/websockets';
import { DemoService } from './demo.service';
import { CreateDemoDto } from './dto/create-demo.dto';
import { UpdateDemoDto } from './dto/update-demo.dto';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*'
  }
})
export class DemoGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly demoService: DemoService) { }

  @SubscribeMessage('createDemo')
  create(@ConnectedSocket() client: Socket, @MessageBody() createDemoDto) {
    if (!client) {
      console.error('Client is undefined.');
      return; // Exit early if client is undefined
    }
    try {
      client.emit('createData', this.demoService.create(createDemoDto));
    } catch (error) {
      console.error('Error emitting message:', error);
    }
  }

  @SubscribeMessage('findAllDemo')
  findAll(@ConnectedSocket() client: Socket) {
    client.emit('initialData', this.demoService.findAll());
  }

  // @SubscribeMessage('findOneDemo')
  // findOne(@MessageBody() id: number) {
  //   return this.demoService.findOne(id);
  // }

  // @SubscribeMessage('updateDemo')
  // update(@MessageBody() updateDemoDto: UpdateDemoDto) {
  //   return this.demoService.update(updateDemoDto.id, updateDemoDto);
  // }

  // @SubscribeMessage('removeDemo')
  // remove(@MessageBody() id: number) {
  //   return this.demoService.remove(id);
  // }
}
