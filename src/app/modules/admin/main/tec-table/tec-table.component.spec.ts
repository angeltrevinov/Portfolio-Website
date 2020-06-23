import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecTableComponent } from './tec-table.component';

describe('TecTableComponent', () => {
  let component: TecTableComponent;
  let fixture: ComponentFixture<TecTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
