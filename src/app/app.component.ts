import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'coupon_couzin';

 constructor(private meta: Meta){}

  ngOnInit(): void {
    this.meta.addTag({ name: 'description', content: 'This is the component where all the aplication runs through.' });
  }

}
