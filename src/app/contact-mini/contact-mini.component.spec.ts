import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMiniComponent } from './contact-mini.component';

describe('ContactMiniComponent', () => {
  let component: ContactMiniComponent;
  let fixture: ComponentFixture<ContactMiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactMiniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
