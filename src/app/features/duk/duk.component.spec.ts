import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DukComponent } from './duk.component';

describe('DukComponent', () => {
  let component: DukComponent;
  let fixture: ComponentFixture<DukComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DukComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
