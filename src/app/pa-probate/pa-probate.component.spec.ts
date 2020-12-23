import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaProbateComponent } from './pa-probate.component';

describe('PaProbateComponent', () => {
  let component: PaProbateComponent;
  let fixture: ComponentFixture<PaProbateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaProbateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaProbateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
