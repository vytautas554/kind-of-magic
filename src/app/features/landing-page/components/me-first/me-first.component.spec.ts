import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeFirstComponent } from './me-first.component';

describe('MeFirstComponent', () => {
  let component: MeFirstComponent;
  let fixture: ComponentFixture<MeFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeFirstComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
