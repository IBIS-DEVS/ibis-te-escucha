import { Component } from '@angular/core';
import { AuthService } from '../providers/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private authService: AuthService, private router: Router) { }

  goToChat() {
    this.router.navigate(['/tabs/chat/' + this.authService.user.uid]);
  }

}
