import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeAreasComponent } from './practice-areas.component';
import {MaterialModule} from '../material.module';
import {RouterTestingModule} from '@angular/router/testing';

describe('PracticeAreasComponent', () => {
  let component: PracticeAreasComponent;
  let fixture: ComponentFixture<PracticeAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeAreasComponent ],
      imports: [
        MaterialModule,
        RouterTestingModule,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
