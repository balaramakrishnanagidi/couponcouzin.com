import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoryicons',
  templateUrl: './categoryicons.component.html',
  styleUrls: ['./categoryicons.component.css']
})
export class CategoryiconsComponent {

  buttonValue: string = '';
  
  constructor(private router: Router) {}

  assignValueToVariable(value: string) {
    this.buttonValue = value;
    this.router.navigate(['/coupon', value]);
  }

}
