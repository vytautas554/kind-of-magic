import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricesTileComponent } from './prices-tile.component';

describe('PricesTileComponent', () => {
  let component: PricesTileComponent;
  let fixture: ComponentFixture<PricesTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricesTileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PricesTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
