import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoinmenteditComponent } from './appoinmentedit.component';

describe('AppoinmenteditComponent', () => {
  let component: AppoinmenteditComponent;
  let fixture: ComponentFixture<AppoinmenteditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppoinmenteditComponent]
    });
    fixture = TestBed.createComponent(AppoinmenteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
