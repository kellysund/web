import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeAreaCardsComponent } from './practice-area-cards.component';

describe('PracticeAreaCardsComponent', () => {
  let component: PracticeAreaCardsComponent;
  let fixture: ComponentFixture<PracticeAreaCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeAreaCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeAreaCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
