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
      this.isRegister = true;
      return this.testimonalsRef.on('value', snapshot => {
        this.onTestimonial(snapshot);
      });
    }
    return false;
  }

  private onTestimonial(snapshot: firebase.database.DataSnapshot) {
    const dicTestimonials = snapshot.val();
    this.listTestimonials = Object.keys(snapshot.val()).map(id => ({
      id,
      ...dicTestimonials[id]
    }));
    this.isLoading = false;
    console.debug('onTestimonial:', { testimonials: this.listTestimonials });
  }

  saveTestimonial(testimonial: Testimonial) {
    this.testimonalsRef.push().set(testimonial);
  }
}
