import { Component, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent {

  constructor(private api: ApiService,
              private router: Router ) { }

  isDropdownOpen = false;
  searchedText = '';

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

  search(){
    this.router.navigate(['/search-results'], {
      queryParams: { query: this.searchedText },
    });
    this.searchedText = '';
  }
  

}
