import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/database';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {


  database: any;

  constructor(private authService: AuthService) {
    this.database = firebase.database();
  }

  getChats() {
    return this.database.ref('active-chats')
  }

  getMessages(key) {
    return this.database.ref('message/' + key);
  }

  async sendMessage(chat_key, text) {
    const newMessage = this.getMessages(chat_key).push();
    let sender;
    if(this.authService.user.isAnonymous) sender = 'Paciente'
    else sender = 'Experto'
    let message = {
      sender: sender,
      sender_uid: this.authService.user.uid,
      timestamp: new Date().getTime(),
      readed: false,
      message: text
    }
    return await newMessage.set(message);
  }
}
