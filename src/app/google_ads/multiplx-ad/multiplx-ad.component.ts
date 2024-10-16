import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiplx-ad',
  templateUrl: './multiplx-ad.component.html',
  styleUrls: ['./multiplx-ad.component.css']
})
export class MultiplxAdComponent implements OnInit, AfterViewInit {
  constructor() { }

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
