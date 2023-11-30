import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ApiService } from 'src/app/shared/services/api.service';


@Component({
  selector: 'app-all-deals',
  templateUrl: './all-deals.component.html',
  styleUrls: ['./all-deals.component.css']
})
export class AllDealsComponent implements OnInit {

  loadingData: boolean = true;
  profile = true;
  displayedCards: any[] = [];
  displayedCouponCards: any[] = [];
  remainingCards: any[] = [];
  remainingCouponCards: any[] = [];
  cards: any[] = [];
  couponCards: any[] = [];
  selectedCompany: string | null = null;
  showMoreflag = false;
  cardsPerPage = 10;

  constructor( private api: ApiService, private meta: Meta){}

  ngOnInit(): void {
    this.meta.addTag({ name: 'description', content: 'All deals in couponcouzin.com' });
    this.meta.addTag({ name:"keywords", content:"couponcouzin, couponcouzin.com, loot deals, best deals, coupon codes, travel, electronics" });

    this.allProducts();
    this.allCoupons();
  }

  allCoupons() {
    this.api.allCoupons().subscribe(
      (data) => {
        this.couponCards = data.data.reverse();
        console.log('couponCards',this.couponCards);
        this.updatecouponCardsArrays();
        this.loadingData = false;
      },
      (error) => {
        console.log(error);
        this.loadingData = false;
      }
    );
  }
  updatecouponCardsArrays() {
    this.displayedCouponCards = this.couponCards.slice(0, this.cardsPerPage);
    this.remainingCouponCards = this.couponCards.slice(this.cardsPerPage);
  if(this.displayedCouponCards.length === 8){
    this.showMoreflag = true;
  }
  }
  
  loadMoreCouponCards() {
  // Load more cards when "Show More" is clicked
  if (this.remainingCouponCards.length > 0) {
    const additionalCouponCards = this.remainingCouponCards.splice(0, this.cardsPerPage);
    this.displayedCouponCards = [...this.displayedCouponCards, ...additionalCouponCards];
  }
  }

  allProducts() {
    this.api.allProducts().subscribe(
      (data) => {
        // console.log('data', data.data)
        this.cards = data.data.reverse();
        // console.log('cards',this.cards);
        this.updateCardArrays();
        this.loadingData = false;
      },
      (error) => {
        console.log(error);
        this.loadingData = false;
      }
    );
  }

  updateCardArrays() {
      this.displayedCards = this.cards.slice(0, this.cardsPerPage);
      this.remainingCards = this.cards.slice(this.cardsPerPage);
    if(this.displayedCards.length === 8){
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



  //error image handling
  onImageErrorP(event: any) {
    event.target.src = '/assets/image_not_found.png';
  }
  onImageErrorW(event: any) {
    event.target.src = '/assets/error-loading-image.png';
  }


  // show or hide discount %

  isDiscountNumber(discount: any): boolean {
    return !isNaN(discount);
  }
}