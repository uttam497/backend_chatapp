import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway(8001, { cors: '*' })
export class ChatGateway {
    @WebSocketServer()
    server: Server;

    @SubscribeMessage('message')
    handleMessage(@MessageBody() message: string): void {
        // Handle the incoming message
        // Emit a response to the client or broadcast it to all connected clients
        console.log(message);
        this.server.emit('message', message);//whenever a client sends a mssg we want to take this mssg and send it to our client so that our client ar connected. the websocketgateway here will recieve the mssg
    }
}
