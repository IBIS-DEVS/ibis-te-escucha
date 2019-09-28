import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ConfigService } from '../providers/config.service';
import { AuthService } from '../providers/auth.service';
import { ChatService } from '../providers/chat.service';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class chatPage implements OnInit {

  @ViewChild('scrollMe', {static: false}) private myScrollContainer: ElementRef;
  key: string;

  text: string = '';
  messages: Array<any> = []

  constructor(private route: ActivatedRoute, private navCtrl: NavController, private chatService: ChatService,
    private configService: ConfigService, private authService: AuthService) {
  }

  ngOnInit() {
    this.key = this.route.snapshot.paramMap.get('key');
    if (!this.key) this.navCtrl.navigateRoot('/');
    this.startChat();
  }

  startChat() {
    this.chatService.getMessages(this.key).on('value', (snapshot) => {
      this.updateMessages(snapshot.val());
    });
  }

  updateMessages(messages) {
    this.messages = [];
    if (!messages) return;
    for (let key in messages) {
      let message = messages[key]
      message.key = key;
      this.messages.push(message);
    }
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  }

  sendMessage() {
    // Not send empty messages
    if(this.text.trim() == '') return;
    this.chatService.sendMessage(this.key, this.text);
    this.text = '';
  }

  getContent() {
    return document.querySelector('ion-content');
  }
  scrollToBottom() {
    this.getContent().scrollToBottom(0);
  }

}