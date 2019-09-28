import { Component, Input } from '@angular/core';
import { Testimonial, MOCK_TESTIMONIAL } from '../models/testimonials';
import { TestimonialService } from '../providers/testimonial.service';
import { ModalController } from '@ionic/angular';
import { TestimonialDetailPage } from '../testimonial-detail/testimonial-detail.page';

@Component({
  selector: 'app-testimonials',
  templateUrl: 'testimonials.page.html',
  styleUrls: ['testimonials.page.scss']
})
export class TestimonialsPage {
  constructor(
    public testimonialService: TestimonialService,
    public modalCtrl: ModalController
  ) {
    console.debug('TestimonialsPage init');
  }
  get testimonials(): Testimonial[] {
    // Only for test
    // return [MOCK_TESTIMONIAL, MOCK_TESTIMONIAL];
    return this.testimonialService.listTestimonials.filter(
      item => !!item.approved
    );
  }

  async onClikcTestimonial(testimonial: Testimonial) {
    const modal = await this.modalCtrl.create({
      component: TestimonialDetailPage,
      componentProps: { testimonial }
    });
    return await modal.present();
  }
}
