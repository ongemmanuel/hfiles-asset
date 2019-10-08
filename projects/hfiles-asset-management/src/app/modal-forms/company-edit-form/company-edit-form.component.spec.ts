import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyEditFormComponent } from './company-edit-form.component';

describe('CompanyEditFormComponent', () => {
  let component: CompanyEditFormComponent;
  let fixture: ComponentFixture<CompanyEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
