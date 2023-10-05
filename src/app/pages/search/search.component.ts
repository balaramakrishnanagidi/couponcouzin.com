import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { query } from '@angular/animations';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchedText = '';
  loadingData: boolean = true;
  profile = true;
  displayedCards: any[] = [];
  remainingCards: any[] = [];
  cards: any[] = [];
  showMoreflag = false;
  cardsPerPage = 8;


  constructor(private api: ApiService,
              private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams) => {
      this.searchedText = queryParams['query'];
      if (this.searchedText) {
       this.search(this.searchedText);
      }
    });
  }

  search(text: string){
    this.api.search(text).subscribe( data => {
      this.cards = data.data;
      console.log(this.cards);
      this.updateCardArrays();
        this.loadingData = false;
    }, error => {
      console.log(error);
      this.loadingData = false;
    });
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

}
