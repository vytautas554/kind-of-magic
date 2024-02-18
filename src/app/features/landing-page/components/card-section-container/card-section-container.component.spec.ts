import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSectionContainerComponent } from './card-section-container.component';

describe('CardSectionContainerComponent', () => {
  let component: CardSectionContainerComponent;
  let fixture: ComponentFixture<CardSectionContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSectionContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardSectionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
