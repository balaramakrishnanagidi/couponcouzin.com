import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankWalletOffersComponent } from './bank-wallet-offers.component';

describe('BankWalletOffersComponent', () => {
  let component: BankWalletOffersComponent;
  let fixture: ComponentFixture<BankWalletOffersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankWalletOffersComponent]
    });
    fixture = TestBed.createComponent(BankWalletOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
