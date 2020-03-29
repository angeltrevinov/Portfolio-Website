import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEducationComponent } from './table-education.component';

describe('TableEducationComponent', () => {
  let component: TableEducationComponent;
  let fixture: ComponentFixture<TableEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
