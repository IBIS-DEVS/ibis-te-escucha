import { Component, OnInit } from '@angular/core';
import { Testimonial } from '../models/testimonials';
import { TestimonialService } from '../providers/testimonial.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-testimonial',
  templateUrl: './new-testimonial.page.html',
  styleUrls: ['./new-testimonial.page.scss']
})
export class NewTestimonialPage implements OnInit {
  public testimonial: Testimonial = {
    author: '',
    authorAge: '',
    description: '',
    title: ''
  };
  public error = '';
  constructor(
    public testimonialService: TestimonialService,
    public router: Router
  ) {}

  ngOnInit() {}

  onClickPublish() {
    if (!this.testimonial.title) {
      this.error = 'Debes incluir un titulo';
    }
    if (!this.testimonial.description) {
      this.error = 'Debes incluir un titulo';
    }
    this.testimonialService.saveTestimonial(this.testimonial);
    this.router.navigate(['/tabs/testimonials']);
  }
}
