import { Injectable } from '@angular/core';
import * as firebase from "firebase/app";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  firebaseConfig = {
    apiKey: "AIzaSyAnIcKESypXNE3JLBf3uSdD6syrdq-IS7U",
    authDomain: "hackatrix-ibis.firebaseapp.com",
    databaseURL: "https://hackatrix-ibis.firebaseio.com",
    projectId: "hackatrix-ibis",
    storageBucket: "",
    messagingSenderId: "",
    appId: "1:711537044704:web:3e15229aa33133c40eb485",
    measurementId: "G-FFGGZY4QND"
  };

  constructor() {
    this.initFirebase();
  }

  initFirebase() {
    console.debug("Firebase init");
    firebase.initializeApp(this.firebaseConfig);
  }
}
