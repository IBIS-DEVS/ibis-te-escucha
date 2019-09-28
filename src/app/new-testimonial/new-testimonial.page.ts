import { Component, OnInit } from '@angular/core';
import { Testimonial } from '../models/testimonials';
import { TestimonialService } from '../providers/testimonial.service';
import { Router } from '@angular/router';

const emptyTestimonial: Testimonial = {
  author: '',
  authorAge: '',
  description: '',
  title: '',
  approved: false
};
@Component({
  selector: 'app-new-testimonial',
  templateUrl: './new-testimonial.page.html',
  styleUrls: ['./new-testimonial.page.scss']
})
export class NewTestimonialPage implements OnInit {
  public testimonial: Testimonial = {
    ...emptyTestimonial
  };
  public error = '';
  constructor(
    public testimonialService: TestimonialService,
    public router: Router
  ) {}

  ngOnInit() {}

  onClickPublish() {
    if (!this.testimonial.title) {
      return (this.error = 'Debes incluir un titulo');
    }
    if (!this.testimonial.description) {
      return (this.error = 'Debes incluir el testimonio');
    }
    this.testimonialService.saveTestimonial(this.testimonial);
    this.testimonial = {
      ...emptyTestimonial
    };
    this.router.navigate(['/tabs/testimonials']);
  }
}
