import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopdealsComponent } from './topdeals.component';

describe('TopdealsComponent', () => {
  let component: TopdealsComponent;
  let fixture: ComponentFixture<TopdealsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopdealsComponent]
    });
    fixture = TestBed.createComponent(TopdealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
