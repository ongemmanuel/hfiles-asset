import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralPermissionComponent } from './general-permission.component';

describe('GeneralPermissionComponent', () => {
  let component: GeneralPermissionComponent;
  let fixture: ComponentFixture<GeneralPermissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralPermissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
