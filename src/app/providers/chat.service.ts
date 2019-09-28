import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/database';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {


  database: any;

  constructor(public authService: AuthService) {
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
    if (this.authService.user.isAnonymous) sender = 'Anónimo';
    else sender = await this.getManagerUser();
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

  async validateActiveChats(chat_key, message) {
    var readed = false;
    if (!this.authService.user.isAnonymous) readed = true;
    await this.getChats().child(chat_key).set(
      {
        last_msg: message.message,
        name: message.sender,
        readed: readed,
        sender_uid: message.sender_uid,
        time: message.timestamp
      }
    )
    return
  }

  async getManagerUser() {
    console.debug("User uid", this.authService.user.uid);
    const user_ref = await this.database.ref('staff/' + this.authService.user.uid).once("value");
    const user_data = user_ref.val()
    return user_data ? 'Experto ' + user_data.name : 'Experto';
  }

  async setChatReaded(chat_key) {
    const values_ref = this.database.ref('active-chats/' + chat_key);
    const values = await values_ref.once("value")
    const values_data = values.val();
    values_data.readed = true;
    console.debug(values_data);
    await values_ref.child('readed').set(true);
  }

}
