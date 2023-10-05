import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { ApiService } from '../../services/api.service';

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
