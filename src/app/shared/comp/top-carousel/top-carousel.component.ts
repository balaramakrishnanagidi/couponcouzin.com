import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { ApiService } from '../../services/api.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Meta } from '@angular/platform-browser';

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

  constructor(private api: ApiService, private meta: Meta) { }

  ngOnInit(): void {

    this.meta.addTag({ name: 'description', content: 'Banners of couponcouzin.com' });
    this.meta.addTag({ name: "keywords", content: "couponcouzin, couponcouzin.com, loot deals, best deals, coupon codes, travel, electronics" });

    this.fetchPosters();
  }

  //owl carousel
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    stagePadding: 50,
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
      }
    }, error => {
      console.log(error);
    });
  }


}
