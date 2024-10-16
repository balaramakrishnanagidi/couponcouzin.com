import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent implements OnInit {

  isDropdownOpen:boolean = false;
  isStoresDropdownOpen: boolean = false;
  searchedText = '';
  constructor(private router: Router) {

  }

  ngOnInit(): void {
   
  }


  openDropdown() {
    this.isDropdownOpen = true;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }

  openStoresDropdown() {
    this.isStoresDropdownOpen = true;
  }

  closeStoresDropdown() {
    this.isStoresDropdownOpen = false;
  }

  navigateToStore(store: string) {
    if (store === 'amazon') {
      this.router.navigate(['/store/amazon']); // Adjust to your Amazon store route
    } else if (store === 'flipkart') {
      this.router.navigate(['/store/flipkart']); // Adjust to your Flipkart store route
    }
  }

  // coupon details

  buttonValue: string = '';
  assignValueToVariable(value: string) {
    this.buttonValue = value;
    this.router.navigate(['/coupons', value]);
  }

  search() {
    this.router.navigate(['/search-results'], {
      queryParams: { query: this.searchedText },
    });
    this.searchedText = '';
  }


}
