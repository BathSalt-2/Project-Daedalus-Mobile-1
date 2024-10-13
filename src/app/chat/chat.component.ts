import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { AiService } from '../services/ai.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: any[] = [];
  newMessage: string = '';

  constructor(
    private chatService: ChatService,
    private aiService: AiService
  ) {}

  ngOnInit() {
    this.chatService.getMessages().subscribe(messages => {
      this.messages = messages;
    });
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.chatService.sendMessage(this.newMessage);
      this.aiService.generateResponse(this.newMessage).then(response => {
        this.chatService.sendMessage(response, true);
      });
      this.newMessage = '';
    }
  }
}