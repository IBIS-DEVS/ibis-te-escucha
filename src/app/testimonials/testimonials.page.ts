import { Component } from '@angular/core';
import { TestimonialService } from '../providers/testimonial.service';
import { Testimonial } from '../models/testimonials';

@Component({
  selector: 'app-testimonials',
  templateUrl: 'testimonials.page.html',
  styleUrls: ['testimonials.page.scss']
})
export class TestimonialsPage {

  constructor(TestimonialService:TestimonialService) {
    console.debug("TestimonialsPage init");
    
  }

  testimonials:Testimonial[]

}
