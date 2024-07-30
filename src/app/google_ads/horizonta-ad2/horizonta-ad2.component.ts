import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horizonta-ad2',
  templateUrl: './horizonta-ad2.component.html',
  styleUrls: ['./horizonta-ad2.component.css']
})
export class HorizontaAd2Component implements OnInit, AfterViewInit {

  constructor() {

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngAfterViewInit(): void {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.log("Adsbygoogle error: ", e);
    }
  }

}
