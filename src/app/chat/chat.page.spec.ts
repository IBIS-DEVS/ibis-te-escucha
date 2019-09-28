import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { chatPage } from './chat.page';

describe('chatPage', () => {
  let component: chatPage;
  let fixture: ComponentFixture<chatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [chatPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(chatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
