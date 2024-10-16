import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipkartStoreComponent } from './flipkart-store.component';

describe('FlipkartStoreComponent', () => {
  let component: FlipkartStoreComponent;
  let fixture: ComponentFixture<FlipkartStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlipkartStoreComponent]
    });
    fixture = TestBed.createComponent(FlipkartStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
