import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoinmentviewComponent } from './appoinmentview.component';

describe('AppoinmentviewComponent', () => {
  let component: AppoinmentviewComponent;
  let fixture: ComponentFixture<AppoinmentviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppoinmentviewComponent]
    });
    fixture = TestBed.createComponent(AppoinmentviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
