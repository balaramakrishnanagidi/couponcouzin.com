import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';



@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  slides: any[] = [];
  chunkedSlides: any[] = [];
  profile = true;
  showH3Element = false;
  


  constructor(private api: ApiService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.cardCrousel();
    setTimeout(() => {
      this.showH3Element = true;
      this.chunkSlides();
    }, 500);

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
    navText: ['<i class="fa fa-chevron-circle-left"></i>', '<i class="fa fa-chevron-circle-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      250: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 5
      },
      1225: {
        items: 6
      }
    },
    nav: true
  }

  //

  navToAllDeals() {
    console.log('button clicked');
    this.router.navigate(['allDeals']);
  }
  cardCrousel() {
    this.api.cardCarousel().subscribe(data => {
      this.slides = data.data;
    }, error => {
      console.log(error);
    }
    )
  }
  chunkSlides() {
    const chunkSize = 5;
    for (let i = 0; i < this.slides.length; i += chunkSize) {
      this.chunkedSlides.push(this.slides.slice(i, i + chunkSize));
    }
  }

  // show or hide discount %

  isDiscountNumber(discount: any): boolean {
    return !isNaN(discount);
  }

}
