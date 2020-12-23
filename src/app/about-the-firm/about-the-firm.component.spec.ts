import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTheFirmComponent } from './about-the-firm.component';

describe('AboutTheFirmComponent', () => {
  let component: AboutTheFirmComponent;
  let fixture: ComponentFixture<AboutTheFirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutTheFirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTheFirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
