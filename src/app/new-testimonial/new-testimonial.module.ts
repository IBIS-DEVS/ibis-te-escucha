import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewTestimonialPage } from './new-testimonial.page';

const routes: Routes = [
  {
    path: '',
    component: NewTestimonialPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewTestimonialPage]
})
export class NewTestimonialPageModule {}
