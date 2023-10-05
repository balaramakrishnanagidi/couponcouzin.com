import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCarouselComponent } from './top-carousel.component';

describe('TopCarouselComponent', () => {
  let component: TopCarouselComponent;
  let fixture: ComponentFixture<TopCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopCarouselComponent]
    });
    fixture = TestBed.createComponent(TopCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
