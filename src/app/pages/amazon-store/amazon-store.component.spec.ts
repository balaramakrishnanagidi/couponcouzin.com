import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonStoreComponent } from './amazon-store.component';

describe('AmazonStoreComponent', () => {
  let component: AmazonStoreComponent;
  let fixture: ComponentFixture<AmazonStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmazonStoreComponent]
    });
    fixture = TestBed.createComponent(AmazonStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
