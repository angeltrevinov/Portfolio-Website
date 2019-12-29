import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmingLogInComponent } from './adming-log-in.component';

describe('AdmingLogInComponent', () => {
  let component: AdmingLogInComponent;
  let fixture: ComponentFixture<AdmingLogInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmingLogInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmingLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
