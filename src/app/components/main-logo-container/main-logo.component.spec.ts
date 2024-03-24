import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLogoComponent } from './main-logo-container.component';

describe('MainLogoContainerComponent', () => {
  let component: MainLogoComponent;
  let fixture: ComponentFixture<MainLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainLogoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MainLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
