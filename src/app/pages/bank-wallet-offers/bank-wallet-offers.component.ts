import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';

// Define the Website interface
interface Website {
  Name: string;
  count: number;
  image: string[];
}

@Component({
  selector: 'app-bank-wallet-offers',
  templateUrl: './bank-wallet-offers.component.html',
  styleUrls: ['./bank-wallet-offers.component.css']
})
export class BankWalletOffersComponent implements OnInit {

  profile = true;
  storeChunks: any[][] = [];
  walletChunks: any [][] = [];

  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.bankOffers();
    this.walletOffers();
  }

  bankOffers() {
    this.api.fetchStores().subscribe(data => {
      // Access the websites array from the response object
      const websites: Website[] = Array.isArray(data.websites) ? data.websites : [];

      // Filter websites whose name contains "bank"
      const bankWebsites = websites.filter(website => website.Name.toLowerCase().includes('bank'));

      // Sort in descending order based on count
      const sortedBankWebsites = bankWebsites.sort((a, b) => b.count - a.count);

      // Take a maximum of 6 items
      const limitedWebsites = sortedBankWebsites.slice(0, 6);

      // Divide into chunks of 3
      for (let i = 0; i < limitedWebsites.length; i += 6) {
        this.storeChunks.push(limitedWebsites.slice(i, i + 6));
      }

      // console.log('Processed data:', this.storeChunks);
    }, error => {
      console.error('Error fetching data:', error);
    });
  }

  walletOffers() {
    this.api.fetchStores().subscribe(data => {
      // Access the websites array from the response object
      const websites: Website[] = Array.isArray(data.websites) ? data.websites : [];
  
      // Filter websites whose name contains "pay" for wallet offers
      const walletWebsites = websites.filter(website => website.Name.toLowerCase().includes('pay'.toLowerCase()));

      // Sort in descending order based on count
      const sortedWalletWebsites = walletWebsites.sort((a, b) => b.count - a.count);
  
      // Take a maximum of 6 items
      const limitedWalletWebsites = sortedWalletWebsites.slice(0, 6);
  
      // Divide into chunks of 3
      for (let i = 0; i < limitedWalletWebsites.length; i += 3) {
        this.walletChunks.push(limitedWalletWebsites.slice(i, i + 3));
      }
  
      // console.log('Processed data:', this.walletChunks);
    }, error => {
      console.error('Error fetching data:', error);
    });
  }
  
  

  // Get name of the coupon company
  couponCompanyName(name: string) {
    this.router.navigate(['/coupons'], { relativeTo: this.route, queryParams: { name: name } });
  }
}
