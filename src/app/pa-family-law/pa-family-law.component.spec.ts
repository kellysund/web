import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaFamilyLawComponent } from './pa-family-law.component';

describe('PaFamilyLawComponent', () => {
  let component: PaFamilyLawComponent;
  let fixture: ComponentFixture<PaFamilyLawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaFamilyLawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaFamilyLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
