import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainIconsContainerComponent } from './main-icons-container.component';

describe('MainIconsContainerComponent', () => {
  let component: MainIconsContainerComponent;
  let fixture: ComponentFixture<MainIconsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainIconsContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainIconsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
