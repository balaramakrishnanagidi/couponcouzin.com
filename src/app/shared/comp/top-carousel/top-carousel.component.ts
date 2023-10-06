import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { ApiService } from '../../services/api.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-top-carousel',
  templateUrl: './top-carousel.component.html',
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: false, showIndicators: true } }
 ],
  styleUrls: ['./top-carousel.component.css']
})
export class TopCarouselComponent implements OnInit {

  noWrapSlides = false;
  showIndicator = true;
  slides: { image: string }[] = [];
  profile = true;

  constructor(private api: ApiService){}

  ngOnInit(): void {
    this.fetchPosters();
  } 

  //owl carousel
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout:3000,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }
//

  fetchPosters(){
    this.api.getAllPosters().subscribe( data => {
      if (data.Status && data.banner) {
        // Map the bannerimage values to the 'image' property in the desired format
        this.slides = data.banner.map((bannerItem: { _id: string, bannerimage: string[] }) => {
          return { image: `http://couponcouzin.com/backend/couponcouzin/app/src/banner/${bannerItem.bannerimage[0]}` };
        });
      }
    },error => {
      console.log(error);
    });
  }

  
}
