import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoinmentupdateComponent } from './appoinmentupdate.component';

describe('AppoinmentupdateComponent', () => {
  let component: AppoinmentupdateComponent;
  let fixture: ComponentFixture<AppoinmentupdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppoinmentupdateComponent]
    });
    fixture = TestBed.createComponent(AppoinmentupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
