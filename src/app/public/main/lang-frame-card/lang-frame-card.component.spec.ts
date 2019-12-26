import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LangFrameCardComponent } from './lang-frame-card.component';

describe('LangFrameCardComponent', () => {
  let component: LangFrameCardComponent;
  let fixture: ComponentFixture<LangFrameCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LangFrameCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LangFrameCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
