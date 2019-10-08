import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameterEditFormComponent } from './parameter-edit-form.component';

describe('ParameterEditFormComponent', () => {
  let component: ParameterEditFormComponent;
  let fixture: ComponentFixture<ParameterEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParameterEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParameterEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
