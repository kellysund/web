import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaWillsTrustsEstatesComponent } from './pa-wills-trusts-estates.component';

describe('PaWillsTrustsEstatesComponent', () => {
  let component: PaWillsTrustsEstatesComponent;
  let fixture: ComponentFixture<PaWillsTrustsEstatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaWillsTrustsEstatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaWillsTrustsEstatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
