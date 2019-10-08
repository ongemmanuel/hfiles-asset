import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigRoleErrorNotifComponent } from './config-role-error-notif.component';

describe('ConfigRoleErrorNotifComponent', () => {
  let component: ConfigRoleErrorNotifComponent;
  let fixture: ComponentFixture<ConfigRoleErrorNotifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigRoleErrorNotifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigRoleErrorNotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
