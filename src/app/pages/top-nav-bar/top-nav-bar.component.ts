import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent implements OnInit {

  isDropdownOpen = false;
  searchedText = '';
  constructor(private meta: Meta,
    private router: Router) {

  }

  ngOnInit(): void {
    this.meta.addTag({ name: 'description', content: 'top_nav_bar' });
    this.meta.addTag({ name: "keywords", content: "couponcouzin, couponcouzin.com, loot deals, best deals, coupon codes, travel, electronics" });
  }


  openDropdown() {
    this.isDropdownOpen = true;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }

  // coupon details

  buttonValue: string = '';
  assignValueToVariable(value: string) {
    this.buttonValue = value;
    this.router.navigate(['/coupon', value]);
  }

  search() {
    this.router.navigate(['/search-results'], {
      queryParams: { query: this.searchedText },
    });
    this.searchedText = '';
  }


}
