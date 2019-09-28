import { Component, Input } from '@angular/core';
import { Testimonial } from '../models/testimonials';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-testimonial-detail',
  templateUrl: './testimonial-detail.page.html',
  styleUrls: ['./testimonial-detail.page.scss']
})
export class TestimonialDetailPage {
  id = '';
  constructor(public modalCtrl: ModalController) {}

  @Input() testimonial: Testimonial;
  @Input() index: number;

  closeModal() {
    this.modalCtrl.dismiss();
  }
}
