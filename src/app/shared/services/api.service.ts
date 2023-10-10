import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http: HttpClient) { }

  // baseUrl = 'http://192.168.0.128:2023';
  // private baseurl = 'http://16.171.244.75:2023';
  baseUrl = 'http://couponcouzin.com:2023';


  //get

  getAllPosters(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getallbanner`);
  }

  cardCarousel(): Observable<any> {
    return this.http.get(`${this.baseUrl}/flashdeals`);
  }

  topDeals(): Observable<any> {
    return this.http.get(`${this.baseUrl}/topdeals`);
  }
  popularStores(): Observable<any> {
    return this.http.get(`${this.baseUrl}/websites`);
  }
  allProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/alluserproducts`)
  }
  allCoupons(): Observable<any> {
    return this.http.get(`${this.baseUrl}/allcoupon`)
  }
  fetchStores(): Observable<any> {
    return this.http.get(`${this.baseUrl}/stores`)
  }

  //post
  search(text: string): Observable<any> {
    const data = {query: text}
    // console.log(data);
     return this.http.post(`${this.baseUrl}/search`,data);
   }
  couponByCompany(company: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/getcompanycoupon`, company);
  }

  getCouponsByCategory(category: string): Observable<any> {
    const data = { maincategory: category };
    return this.http.post(`${this.baseUrl}/couponcompany`, data);
  }

  getCouponsBySubCategory(Subcategory: string): Observable<any> {
    const data = { categorys: Subcategory };
    return this.http.post(`${this.baseUrl}/couponsubcategory`, data);
  }

  couponbywebsite(website: string): Observable<any> {
    const data = { company: website };
    return this.http.post(`${this.baseUrl}/couponbywebsite`, data);
  }
}
