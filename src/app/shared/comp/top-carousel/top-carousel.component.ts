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
  slides: any[] = [];
  profile = true;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.fetchPosters();
  }

  //owl carousel
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 7000,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    stagePadding: 0,
    margin: 25,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
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
    nav: true
  }
  //

  fetchPosters() {
    this.api.getAllPosters().subscribe(data => {
      if (data.Status && data.banner) {
        this.slides = data.banner;
        this.slides = this.slides.reverse();
      }
    }, error => {
      console.log(error);
    });
  }


}
