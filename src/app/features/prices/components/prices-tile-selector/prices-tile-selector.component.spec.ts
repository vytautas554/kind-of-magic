import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricesTileSelectorComponent } from './prices-tile-selector.component';

describe('PricesTileSelectorComponent', () => {
  let component: PricesTileSelectorComponent;
  let fixture: ComponentFixture<PricesTileSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricesTileSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PricesTileSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
