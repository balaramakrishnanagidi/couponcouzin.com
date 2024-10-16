import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontaAd2Component } from './horizonta-ad2.component';

describe('HorizontaAd2Component', () => {
  let component: HorizontaAd2Component;
  let fixture: ComponentFixture<HorizontaAd2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorizontaAd2Component]
    });
    fixture = TestBed.createComponent(HorizontaAd2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
