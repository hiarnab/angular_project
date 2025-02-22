import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoinmentlistComponent } from './appoinmentlist.component';

describe('AppoinmentlistComponent', () => {
  let component: AppoinmentlistComponent;
  let fixture: ComponentFixture<AppoinmentlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppoinmentlistComponent]
    });
    fixture = TestBed.createComponent(AppoinmentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
