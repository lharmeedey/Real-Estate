import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseEstateComponent } from './showcase-estate.component';

describe('ShowcaseEstateComponent', () => {
  let component: ShowcaseEstateComponent;
  let fixture: ComponentFixture<ShowcaseEstateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowcaseEstateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseEstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
