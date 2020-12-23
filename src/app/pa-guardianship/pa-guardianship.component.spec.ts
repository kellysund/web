import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaGuardianshipComponent } from './pa-guardianship.component';

describe('PaGuardianshipComponent', () => {
  let component: PaGuardianshipComponent;
  let fixture: ComponentFixture<PaGuardianshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaGuardianshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaGuardianshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
