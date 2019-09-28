import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../providers/auth.service';
import { Router } from '@angular/router';
import { ConfigService } from '../providers/config.service';

@Component({
  selector: 'app-staff-login',
  templateUrl: './staff-login.page.html',
  styleUrls: ['./staff-login.page.scss'],
})
export class StaffLoginPage implements OnInit {



  credentials: FormGroup;

  constructor(private formBuilder: FormBuilder, public authService: AuthService, private configService: ConfigService,
    private _router: Router) {
    this.credentials = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  async login() {
    await this.configService.showLoader();
    this.authService.emailPassLogin(this.credentials.value.email, this.credentials.value.password).then((data) => {
      this.configService.dismissLoader();
      this._router.navigate(['/staff']);
    }).catch((err) => {
      console.error(err);
      this.configService.showToast("Correo y/ó contraseña incorrectos", 'danger');
      this.configService.dismissLoader();
    });
  }

}
