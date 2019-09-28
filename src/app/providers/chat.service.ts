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
    return this.database.ref('active-chats');
  }

  getMessages(key) {
    return this.database.ref('message/' + key);
  }

  async sendMessage(chat_key, text) {
    const newMessage = this.getMessages(chat_key).push();
    let sender;
    if(this.authService.user.isAnonymous) sender = 'Anonimo';
    else sender = 'Experto';
    let message = {
      sender: sender,
      sender_uid: this.authService.user.uid,
      timestamp: new Date().getTime(),
      readed: false,
      message: text
    }
    await newMessage.set(message);
    await this.validateActiveChats(chat_key, message);
    return
  }

  async validateActiveChats(chat_key, message){
    await this.getChats().child(chat_key).set(
      {
        last_msg: message.message,
        name: message.sender,
        readed: false,
        sender_uid: message.sender_uid,
        time: message.timestamp
      }
    )
    return
  }
}
