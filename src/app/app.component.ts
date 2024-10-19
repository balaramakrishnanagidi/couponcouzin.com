import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'couponcouzin.com - Best Deals and Coupons';

  constructor(
    private meta: Meta, 
    private titleService: Title, 
    private router: Router, 
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    // Initial meta tags for the app
    this.meta.addTags([
      { name: 'description', content: 'Find the best deals, offers, and coupons from leading brands such as Amazon, Flipkart, Zomato, Swiggy, SBI Bank, and many more at CouponCouzin.com. Save big with hand-picked discounts today!' },
      { name: 'og:title', content: 'couponcouzin.com - Best Deals and Coupons' },
      { name: 'og:description', content: 'Discover hand-picked deals, exclusive offers, and the latest coupons from top brands like Amazon, Flipkart, Zomato, Swiggy, SBI Bank, and more. Shop smarter with CouponCouzin.com' },
      { name: 'og:image', content: 'https://couponcouzin.com/assets/logo.png' },
      { name: 'og:url', content: 'https://couponcouzin.com' },
      { name: 'og:type', content: 'website' }
    ]);

    // Listen for route changes to update meta tags dynamically
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      switchMap(() => this.updateMetaTags())
    ).subscribe();
  }

  // Simulated API call methods
  fetchCoupons(category: string): Observable<any> {
    return this.http.get(`https://couponcouzin.com/coupons/${category}`);
  }

  fetchProductDetails(productName: string, productId: string): Observable<any> {
    return this.http.get(`https://couponcouzin.com/products/fashion/product-details/${productName}/${productId}`);
  }

  fetchBlogDetails(blogName: string, blogId: string): Observable<any> {
    return this.http.get(`https://couponcouzin.com/blogs/blog-details/${blogName}/${blogId}`);
  }

  updateMetaTags(): Observable<any> {
    const currentUrl = this.router.url;
    const absoluteUrl = `https://couponcouzin.com${currentUrl}`;

    // Update canonical URL for the current route
    this.updateCanonicalUrl(absoluteUrl);

    if (currentUrl.includes('/products/')) {
      // Extract product details from URL and fetch data
      const [productName, productId] = this.extractProductInfoFromUrl(currentUrl);
      return this.fetchProductDetails(productName, productId).pipe(
        switchMap(product => {
          console.log('Product data:', product);
          this.updateProductMetaTags(product, absoluteUrl);
          return [];
        })
      );
    } else if (currentUrl.includes('/coupons/')) {
      // Extract coupon category from URL and fetch data
      const category = this.extractCouponCategoryFromUrl(currentUrl);
      return this.fetchCoupons(category).pipe(
        switchMap(coupon => {
          this.updateCouponMetaTags(coupon, absoluteUrl);
          return [];
        })
      );
    } else if (currentUrl.includes('/blogs/')) {
      // Extract blog details from URL and fetch data
      const [blogName, blogId] = this.extractBlogInfoFromUrl(currentUrl);
      return this.fetchBlogDetails(blogName, blogId).pipe(
        switchMap(blog => {
          this.updateBlogMetaTags(blog, absoluteUrl);
          return [];
        })
      );
    } else {
      // Default meta tags for other pages
      this.setDefaultMetaTags(absoluteUrl);
      return of(null);
    }
  }

  // Meta tag update methods
  updateProductMetaTags(product: any, absoluteUrl: string): void {
    this.titleService.setTitle(`${product.metaTitle} | Coupon Couzin`);
    this.meta.updateTag({ name: 'og:title', content: `${product.metaTitle} - Best Deals` });
    this.meta.updateTag({ name: 'og:description', content: `${product.metaDescription}` });
    this.meta.updateTag({ name: 'keywords', content: `${product.primaryKeyword}, ${product.secondaryKeyword}, ${product.maincategory}, ${product.categorys}` });
    this.updateCanonicalUrl(absoluteUrl);
  }

  updateCouponMetaTags(coupon: any, absoluteUrl: string): void {
    this.titleService.setTitle(`${coupon.company} Coupons - Coupon Couzin`);
    this.meta.updateTag({ name: 'og:title', content: `${coupon.company} Coupons` });
    this.meta.updateTag({ name: 'og:description', content: `${coupon.metaDescription}` });
    this.meta.updateTag({ name: 'keywords', content: `${coupon.primaryKeyword}, ${coupon.secondaryKeyword}, ${coupon.maincategory}, ${coupon.categorys}` });
    this.updateCanonicalUrl(absoluteUrl);
  }

  updateBlogMetaTags(blog: any, absoluteUrl: string): void {
    this.titleService.setTitle(`${blog.metaTitle} | Coupon Couzin Blog`);
    this.meta.updateTag({ name: 'og:title', content: blog.metaTitle });
    this.meta.updateTag({ name: 'og:description', content: blog.metaDescription });
    this.meta.updateTag({ name: 'keywords', content: `${blog.primaryKeyword}, ${blog.secondaryKeyword}` });
    this.updateCanonicalUrl(absoluteUrl);
  }

  setDefaultMetaTags(absoluteUrl: string): void {
    this.titleService.setTitle('Coupon Couzin - Best Deals and Coupons');
    this.meta.updateTag({ name: 'og:title', content: 'Coupon Couzin - Best Deals and Coupons' });
    this.meta.updateTag({ name: 'og:description', content: 'Find the best deals, offers, and coupons.' });
    this.meta.updateTag({ name: 'keywords', content: 'coupons, deals, offers, discounts, flash sales, mega sales, great indian festival, big billion days' });
    this.updateCanonicalUrl(absoluteUrl);
  }

  // Helper methods to extract info from URLs
  extractProductInfoFromUrl(url: string): [string, string] {
    const parts = url.split('/');
    return [parts[parts.length - 2], parts[parts.length - 1]]; // productName, productId
  }

  extractCouponCategoryFromUrl(url: string): string {
    return url.split('/').pop() || ''; // category, with fallback empty string
  }

  extractBlogInfoFromUrl(url: string): [string, string] {
    const parts = url.split('/');
    return [parts[parts.length - 2], parts[parts.length - 1]]; // blogName, blogId
  }

  // Helper method to update canonical tag
  updateCanonicalUrl(url: string): void {
    const head = document.getElementsByTagName('head')[0];
    let element = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    
    if (element) {
      element.href = url;
    } else {
      element = document.createElement('link');
      element.setAttribute('rel', 'canonical');
      element.setAttribute('href', url);
      head.appendChild(element);
    }
  }
}
