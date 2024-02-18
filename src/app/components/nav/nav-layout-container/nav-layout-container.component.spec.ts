import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLayoutContainerComponent } from './nav-layout-container.component';

describe('NavLayoutContainerComponent', () => {
  let component: NavLayoutContainerComponent;
  let fixture: ComponentFixture<NavLayoutContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavLayoutContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavLayoutContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
