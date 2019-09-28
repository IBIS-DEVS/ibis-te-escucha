import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial-detail',
  templateUrl: './testimonial-detail.page.html',
  styleUrls: ['./testimonial-detail.page.scss'],
})
export class TestimonialDetailPage {

  @Input() testimonial: any;
  
  constructor() { }

}
