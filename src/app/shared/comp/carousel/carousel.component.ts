import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit{
  
  slides: any[] = [];
  chunkedSlides: any[] = [];
  profile = true;
  showH3Element = false;

  
  constructor( private api: ApiService,
               private router: Router) {
  }

  ngOnInit(): void {
    this.cardCrousel();
    setTimeout(() => {
      this.showH3Element = true;
    }, 1000);
  }

  navToAllDeals(){
    console.log('button clicked');
    this.router.navigate(['allDeals']);
  }
  cardCrousel(){
    this.api.cardCarousel().subscribe( data => {
      this.slides = data.data;
      this.chunkedSlides = this.chunkArray(this.slides, 6);
      // console.log(this.slides);
    },error => {
      console.log(error);
    }
    )
  }


  private chunkArray(array: any[], chunkSize: number): any[] {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunkedArray.push(array.slice(i, i + chunkSize));
    }
    return chunkedArray;
  }


  activeSlideIndex = 0; // Initialize active slide index

  goToSlide(index: number) {
    this.activeSlideIndex = index;
  }

  onSlideChange(event: any) {
    this.activeSlideIndex = event.current;
  }
  nextSlide() {
    if (this.activeSlideIndex < this.chunkedSlides.length - 1) {
      this.activeSlideIndex++;
    }
  }

  prevSlide() {
    if (this.activeSlideIndex > 0) {
      this.activeSlideIndex--;
    }
  }
}
