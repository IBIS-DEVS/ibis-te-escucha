import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { FirebaseService } from './firebase.service';
import { Testimonial } from '../models/testimonials';
import 'firebase/database';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {
  private isRegister = false;
  public isLoading = true;
  private testimonalsRef = firebase.database().ref('testimonials/');
  public listTestimonials: Testimonial[] = [];

  constructor(firebaseService: FirebaseService) {
    console.debug('TestimonialService init');
    this.getTestimonials();
  }
  public getTestimonials() {
    if (!this.isRegister) {
      return this.testimonalsRef.on('value', this.onTestimonial);
    }
    return false;
  }

  private onTestimonial(snapshot) {
    this.listTestimonials = snapshot.val();
    this.isLoading = true;
  }
}
