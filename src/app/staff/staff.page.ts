import { Component, OnInit } from '@angular/core';
import { ChatService } from '../providers/chat.service';
import { Route, Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.page.html',
  styleUrls: ['./staff.page.scss'],
})
export class StaffPage implements OnInit {

  chats: Array<any> = [];

  constructor(public chatService: ChatService, private route: Router, private authService: AuthService) {
    this.chatsSubscription();
  }

  ngOnInit() {
  }

  chatsSubscription() {
    console.debug("chatsSubscription");
    this.chatService.getChats().on('value', (snapshot) => {
      this.updateChats(snapshot.val());
    })
  }

  updateChats(chats) {
    this.chats = [];
    for (let key in chats) {
      let chat = chats[key]
      chat.key = key;
      this.chats.push(chat);
    }
  }

  timeToStringDate(time) {
    return new Date(time).toLocaleDateString() + ' ' + new Date(time).toLocaleTimeString();;
  }

  openChat(chat) {
    this.route.navigate(['chat/' + chat.key + '/'])
  }

  logout(){
    this.authService.logout();
    this.route.navigate(['/']);
  }

}
