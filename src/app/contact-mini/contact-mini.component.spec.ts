import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMiniComponent } from './contact-mini.component';
import {MaterialModule} from '../material.module';

describe('ContactMiniComponent', () => {
  let component: ContactMiniComponent;
  let fixture: ComponentFixture<ContactMiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactMiniComponent ],
      imports: [ MaterialModule ]
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
