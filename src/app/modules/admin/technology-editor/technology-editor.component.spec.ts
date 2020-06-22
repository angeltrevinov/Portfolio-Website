import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyEditorComponent } from './technology-editor.component';

describe('TechnologyEditorComponent', () => {
  let component: TechnologyEditorComponent;
  let fixture: ComponentFixture<TechnologyEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologyEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
