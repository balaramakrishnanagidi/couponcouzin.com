import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchedText = '';
  profile = true;
  displayedCards: any[] = [];
  remainingCards: any[] = [];
  remainingCouponCards: any[] = [];
  displayedCouponCards: any[] = [];
  productCards: any[] = [];
  couponCards: any[] = [];
  showMoreflag = false;
  cardsPerPage = 8;


  constructor(private api: ApiService,
    private route: ActivatedRoute,
    private meta: Meta) { }

  ngOnInit(): void {

    this.meta.addTag({ name: 'description', content: 'Search here for the products or coupons in couponcouzin.com' });
    this.meta.addTag({ name:"keywords", content:"couponcouzin, couponcouzin.com, loot deals, best deals, coupon codes, travel, electronics" });

    this.route.queryParams.subscribe((queryParams) => {
      this.searchedText = queryParams['query'];
      if (this.searchedText) {
        this.search(this.searchedText);
      }
    });
  }

  search(text: string) {
    this.api.search(text).subscribe(response => {
      this.productCards = response.data.products;
      console.log("This is the productCards from search", this.productCards);
      this.couponCards = response.data.coupons;
      console.log("This is the couponCards from search", this.couponCards);
      this.updateCardArrays();
      this.updatecouponCardsArrays();
    }, error => {
      console.log(error);
    });
  }

  // coupons

  updatecouponCardsArrays() {
    this.displayedCouponCards = this.couponCards.slice(0, this.cardsPerPage);
    this.remainingCouponCards = this.couponCards.slice(this.cardsPerPage);
    if (this.displayedCouponCards.length === 8) {
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
  // products

  updateCardArrays() {
    this.displayedCards = this.productCards.slice(0, this.cardsPerPage);
    this.remainingCards = this.productCards.slice(this.cardsPerPage);
    if (this.displayedCards.length === 8) {
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

}
