import { Component, Input } from '@angular/core';
import { Testimonial } from '../models/testimonials';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { TestimonialService } from '../providers/testimonial.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-testimonial-detail',
  templateUrl: './testimonial-detail.page.html',
  styleUrls: ['./testimonial-detail.page.scss']
})
export class TestimonialDetailPage {
  id = '';
  constructor(
    // private route: ActivatedRoute,
    // private testimonialService: TestimonialService
    public modalCtrl: ModalController
  ) {}

  @Input() testimonials: Testimonial;

  closeModal() {
    this.modalCtrl.dismiss();
  }
  // get testimonial(): Testimonial {
  //   this.id = this.route.snapshot.paramMap.get('id');
  //   let testimonial = this.testimonialService.listTestimonials[this.id];
  //   if (!testimonial) {
  //     testimonial = this.testimonialService.listTestimonials[0];
  //   }
  //   return testimonial;
  // }
}
