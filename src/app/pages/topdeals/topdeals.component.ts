import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';


@Component({
  selector: 'app-topdeals',
  templateUrl: './topdeals.component.html',
  styleUrls: ['./topdeals.component.css']
})
export class TopdealsComponent implements OnInit{
  cards: any[] = [];
  websites: any[] = [];
  displayedCards: any[] = [];
  remainingCards: any[] = [];
  couponByCompanyArray: any[] = [];
  selectedCompany: string | null = null;
  cardsPerPage = 48;
  showMoreflag = false;
  profile = true;
  showH3Element = false;
  mrp: any = "";

  constructor(private api: ApiService) {}

  ngOnInit(): void {
this.topDeals();
    this.popularStores();
    setTimeout(() => {
      this.showH3Element = true;
    }, 1000);
  }


  //error image handling
  onImageErrorP(event: any) {
    event.target.src = '/assets/no-image.jpg';
  }
  onImageErrorW(event: any) {
    event.target.src = '/assets/no-image.jpg';
  }

  couponByCompany(Name: string) {
    this.selectedCompany = Name;
    const partner = { company: Name };
    // console.log("couponByCompany", partner);
    this.api.couponByCompany(partner).subscribe(
      (response) => {
        this.couponByCompanyArray = response.data;
        // console.log(response);
        this.updateCardArrays(); // Update cards after filtering by company
      },
      (error) => {
        console.log(error);
      }
    );
  }

  topDeals() {
    this.api.topDeals().subscribe(
      (data) => {
        this.cards = data.data.reverse();
        this.updateCardArrays();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  popularStores() {
    this.api.popularStores().subscribe(
      (response) => {
        this.websites = response.websites;
        // console.log(this.websites)
        this.updateCardArrays();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateCardArrays() {
    if (this.selectedCompany) {
      // Filter cards by company
      this.displayedCards = this.cards.filter(card => card.company === this.selectedCompany).slice(0, this.cardsPerPage);
      this.remainingCards = this.cards.filter(card => card.company === this.selectedCompany).slice(this.cardsPerPage);
      if(this.displayedCards.length === 20){
        this.showMoreflag = true;
      }
    } else {
      // Show all cards if no company is selected
      this.displayedCards = this.cards.slice(0, this.cardsPerPage);
      this.remainingCards = this.cards.slice(this.cardsPerPage);
    }
    if(this.displayedCards.length === 20){
      this.showMoreflag = true;
    }
  }

  loadMoreCards() {
    // Load more cards when "Show More" is clicked
    if (this.remainingCards.length > 0) {
      const additionalCards = this.remainingCards.splice(0, this.cardsPerPage);
      this.displayedCards = [...this.displayedCards, ...additionalCards];
    }
  }

  pageReload(){
    this.selectedCompany = null;
    this.topDeals();
  }
  // show or hide discount %

  isDiscountNumber(discount: any): boolean {
    return !isNaN(discount) && isFinite(discount);
  }

  createSlug(name: string): string {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')  // Replace spaces and special characters with hyphens
      .replace(/(^-|-$)/g, '');     // Remove leading or trailing hyphens
  }
  
  getThisProduct(card: any) {
    // Create a slug from the product name
    const slug = this.createSlug(card.Name);
    const productUrl = `/products/${card.maincategory}/product-details/${slug}/${card._id}`;
    
    window.open(productUrl, '_blank');
  }
}
