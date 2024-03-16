import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceTileMobileComponent } from './price-tile-mobile.component';

describe('PriceTileMobileComponent', () => {
  let component: PriceTileMobileComponent;
  let fixture: ComponentFixture<PriceTileMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriceTileMobileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PriceTileMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
