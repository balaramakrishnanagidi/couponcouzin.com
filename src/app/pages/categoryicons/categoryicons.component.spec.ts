import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryiconsComponent } from './categoryicons.component';

describe('CategoryiconsComponent', () => {
  let component: CategoryiconsComponent;
  let fixture: ComponentFixture<CategoryiconsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryiconsComponent]
    });
    fixture = TestBed.createComponent(CategoryiconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
