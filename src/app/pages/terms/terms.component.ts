import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {

  constructor(private meta: Meta) {

  }
  ngOnInit(): void {
    this.meta.addTag({ name: 'description', content: 'terms and conditions of couponcouzin.com' });
    this.meta.addTag({ name: "keywords", content: "couponcouzin, couponcouzin.com, loot deals, best deals, coupon codes, travel, electronics" });
  }
}
