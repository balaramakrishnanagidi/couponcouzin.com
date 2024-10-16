import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.css']
})
export class AdComponent implements OnInit, AfterViewInit {

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
