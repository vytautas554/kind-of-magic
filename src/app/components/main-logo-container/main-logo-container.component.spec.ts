import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLogoContainerComponent } from './main-logo-container.component';

describe('MainLogoContainerComponent', () => {
  let component: MainLogoContainerComponent;
  let fixture: ComponentFixture<MainLogoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainLogoContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainLogoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
