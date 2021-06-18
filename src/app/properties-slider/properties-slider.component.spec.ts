import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesSliderComponent } from './properties-slider.component';

describe('PropertiesSliderComponent', () => {
  let component: PropertiesSliderComponent;
  let fixture: ComponentFixture<PropertiesSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertiesSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
