import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalAdComponent } from './vertical-ad.component';

describe('VerticalAdComponent', () => {
  let component: VerticalAdComponent;
  let fixture: ComponentFixture<VerticalAdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerticalAdComponent]
    });
    fixture = TestBed.createComponent(VerticalAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
