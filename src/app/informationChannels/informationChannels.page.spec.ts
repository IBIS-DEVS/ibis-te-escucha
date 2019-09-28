import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { informationChannelsPage } from './informationChannels.page';

describe('informationChannelsPage', () => {
  let component: informationChannelsPage;
  let fixture: ComponentFixture<informationChannelsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [informationChannelsPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(informationChannelsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
