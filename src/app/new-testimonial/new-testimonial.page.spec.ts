import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTestimonialPage } from './new-testimonial.page';

describe('NewTestimonialPage', () => {
  let component: NewTestimonialPage;
  let fixture: ComponentFixture<NewTestimonialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTestimonialPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTestimonialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
