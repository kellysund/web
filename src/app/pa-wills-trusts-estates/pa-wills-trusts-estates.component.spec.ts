import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaWillsTrustsEstatesComponent } from './pa-wills-trusts-estates.component';
import {MaterialModule} from '../material.module';

describe('PaWillsTrustsEstatesComponent', () => {
  let component: PaWillsTrustsEstatesComponent;
  let fixture: ComponentFixture<PaWillsTrustsEstatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaWillsTrustsEstatesComponent ],
      imports: [ MaterialModule ],
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
