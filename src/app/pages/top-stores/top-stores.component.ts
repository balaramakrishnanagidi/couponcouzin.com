import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-top-stores',
  templateUrl: './top-stores.component.html',
  styleUrls: ['./top-stores.component.css']
})
export class TopStoresComponent implements OnInit {

  profile = true;
  featuredStore: any[] = [];
  storeChunks: any[][] = [];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-right" aria-hidden="true"></i>'],
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

  constructor(private api: ApiService,
              private router: Router,
              private route: ActivatedRoute,
              private meta: Meta) {}
  ngOnInit(): void {
    this.meta.addTag({ name: 'description', content: 'top-stores' });
    this.meta.addTag({ name:"keywords", content:"couponcouzin, couponcouzin.com, loot deals, best deals, coupon codes, travel, electronics" });

    this.couponStores();
  }

  couponStores() {
    this.api.fetchStores().subscribe(data => {
      const websites = data.websites;
      // console.log(websites);

      for (let i = 0; i < websites.length; i += 12) {
        this.storeChunks.push(websites.slice(i, i + 12));
      }

      const Name = data.highestCountWebsite;
      const count = data.highestCount;
      const image = data.highestCountWebsiteImage;

      this.featuredStore = [
        {
          Name,
          count,
          image
        }
      ];

    }, error => {
      console.error(error)
    });
  }

  //get name of the coupon company

  couponCompanyName(Name: string){
    this.router.navigate(['/coupons'], {relativeTo: this.route, queryParams: {name: Name}});
    
  }

}
