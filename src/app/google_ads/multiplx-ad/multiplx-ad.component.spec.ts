import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplxAdComponent } from './multiplx-ad.component';

describe('MultiplxAdComponent', () => {
  let component: MultiplxAdComponent;
  let fixture: ComponentFixture<MultiplxAdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiplxAdComponent]
    });
    fixture = TestBed.createComponent(MultiplxAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
