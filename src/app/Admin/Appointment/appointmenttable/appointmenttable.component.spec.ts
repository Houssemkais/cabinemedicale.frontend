import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmenttableComponent } from './appointmenttable.component';

describe('AppointmenttableComponent', () => {
  let component: AppointmenttableComponent;
  let fixture: ComponentFixture<AppointmenttableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppointmenttableComponent]
    });
    fixture = TestBed.createComponent(AppointmenttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
