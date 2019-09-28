import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { testimonialsPage } from './testimonials.page';

describe('testimonialsPage', () => {
  let component: testimonialsPage;
  let fixture: ComponentFixture<testimonialsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [testimonialsPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(testimonialsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
