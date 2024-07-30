import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical-ad',
  templateUrl: './vertical-ad.component.html',
  styleUrls: ['./vertical-ad.component.css']
})
export class VerticalAdComponent implements OnInit, AfterViewInit{

  constructor() {}
  
  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }  catch (e){
      console.error("Adsbygoogle error: ", e);
    }
  }

}
