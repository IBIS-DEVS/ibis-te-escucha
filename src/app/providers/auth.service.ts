import { Injectable } from '@angular/core';
import * as firebase from "firebase/app";
import "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;

  constructor() {
    this.initEvents();
  }

  initEvents() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        console.debug("Auth user", user);
      } else {
        this.anonymuslyAuth();
      }
    });
  }

  anonymuslyAuth() {
    firebase.auth().signInAnonymously().catch((error) => {
      console.error(error);
    });
  }



}
