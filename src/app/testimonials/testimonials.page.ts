import { Component } from '@angular/core';
import { Testimonial, MOCK_TESTIMONIAL } from '../models/testimonials';
import { TestimonialService } from '../providers/testimonial.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: 'testimonials.page.html',
  styleUrls: ['testimonials.page.scss']
})
export class TestimonialsPage {
  constructor(public testimonialService: TestimonialService) {
    console.debug('TestimonialsPage init');
  }

  get testimonials(): Testimonial[] {
    // Only for test
    // return [MOCK_TESTIMONIAL, MOCK_TESTIMONIAL];
    return this.testimonialService.listTestimonials;
  }

  onClikcTestimonial(testimonial:Testimonial){
    testimonial.authorAge
    console.debug("onClikcTestimonial",{})
  }

  onClickAdd(){
    this.testimonialService.saveTestimonial(this.testimonials[0]);
  }
}
