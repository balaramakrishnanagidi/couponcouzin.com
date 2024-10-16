import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DealModalComponent } from 'src/app/shared/comp/deal-modal/deal-modal.component';
import { ApiService } from 'src/app/shared/services/api.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Breadcrumbs } from 'src/app/shared/models/breadcrumb.model';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-coupon-details',
  templateUrl: './coupon-details.component.html',
  styleUrls: ['./coupon-details.component.css']
})
export class CouponDetailsComponent implements OnInit {

  category: string = '';
  posts: any[] = [];
  websites: any[] = [];
  profile = true;
  maincategory: string = '';
  selectedCompany: string = '';
  data: any[] = [];
  showBody = false;
  breadcrumbs: Breadcrumbs[] = [];

  constructor(private api: ApiService,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private router: Router,) { }

  //owl carousel
  customOptions: OwlOptions = {
    loop: true,
    autoplay: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    navText: ['<i class="fa-solid fa-square-caret-left"></i>', '<i class="fa-solid fa-square-caret-right"></i>'],
    stagePadding: 20,
    // margin: 5,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      250: {
        items: 3
      },
      400: {
        items: 4
      },
      740: {
        items: 5
      },
      940: {
        items: 6
      },
      1225: {
        items: 7
      }
    },
    nav: true,
  }

  //


  ngOnInit(): void {  

    // Subscribe to route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd) // Only trigger on URL changes
    ).subscribe(() => {
      this.setBreadcrumbs();
    });

    this.route.params.subscribe((params) => {
      this.category = params['category'];
  
      // Get the company from the query params (if available)
      this.route.queryParams.subscribe(queryParams => {
        const company = queryParams['company'] ? queryParams['company'].toLowerCase() : null;
  
        if (this.category === 'food' || this.category === 'fashion' ||
          this.category === 'travel' || this.category === 'tv' ||
          this.category === 'mobiles' || this.category === 'beauty' ||
          this.category === 'computer' || this.category === 'recharge' ||
          this.category === 'appliances' || this.category === 'entertainment' ||
          this.category === 'camera' || this.category === 'kids') {
          
          // Fetch data based on the category
          this.api.getCouponsByCategory(this.category).subscribe(
            (data: any) => {
              if (data) {
                this.posts = data.posts.reverse();
                this.websites = data.websites.reverse();
                this.maincategory = data.posts[0].maincategory;
  
                // If a company is specified in the query params, filter the posts
                if (company) {
                  this.filterPostsByCompany(company);
                }
              } else {
                console.error('Invalid response from the API.');
              }
            },
            (error) => {
              console.log('Error:', error);
            }
          );
        } else {
          // Fetch data based on the subcategory
          this.api.getCouponsBySubCategory(this.category).subscribe(
            (data: any) => {
              if (data) {
                this.posts = data.posts.reverse();
                this.websites = data.websites.reverse();
                this.maincategory = data.posts[0].maincategory;
  
                // If a company is specified in the query params, filter the posts
                if (company) {
                  this.filterPostsByCompany(company);
                }
              } else {
                console.error('Invalid response from the API.');
              }
            },
            (error) => {
              console.log('Error:', error);
            }
          );
        }
      });
    });

    this.setBreadcrumbs();
  }

  // Function to filter posts by company
filterPostsByCompany(company: string): void {
  // Format the company name from the query parameter
  const formattedCompany = company.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, '');

  // Filter the posts by matching company names
  this.posts = this.posts.filter(post => 
    post.websiteName.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, '') === formattedCompany
  );
}

  //For loading cards if there is a selected company
  couponbywebsite(company: string) {
    this.selectedCompany = company;
    const formattedCompany = company.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, '');
    // Update the URL without reloading the page
    this.router.navigate([], {
      relativeTo: this.route,
      queryParamsHandling: 'merge',
      queryParams: { company: formattedCompany }
    });

    this.api.couponbywebsite(company).subscribe(data => {
      this.posts = data.posts;
      // console.log('savesta',this.posts)
    }, error => {
      console.log(error);
    });
  }


  //error image handling
  onImageErrorP(event: any) {
    event.target.src = '/assets/no-image.jpg';
  }
  onImageErrorW(event: any) {
    event.target.src = '/assets/no-image.jpg';
  }

  openDealModal(websiteImage: any, WebsiteName: string, Name: string, couponCode: string, urlpath: string) {
    const modalRef = this.modalService.open(DealModalComponent, { size: 'lg', centered: true });
    // You can pass data to the modal if needed using modalRef.componentInstance
    this.data = [websiteImage, WebsiteName, Name, couponCode, urlpath]
    modalRef.componentInstance.data = this.data
    setTimeout(() => {
      window.open(urlpath, '_blank');
    }, 3000);
  }

  // for show and hide details
  toggleBody(post: any): void {
    post.showBody = !post.showBody;
  }

  // for handling description
  getDescriptionItems(description: string): string[] {
    return description.split('||');
  }

  setBreadcrumbs() {
    // Get the current route parameters
    const category = this.route.snapshot.url[1]?.path || 'default'; // Extract the dynamic part of the URL

    this.breadcrumbs = [
      { label: 'Home', url: '/' },
      { label: 'Coupons', url: '/coupons' },
      { label: category, url: `/coupons/${category}` },
    ];
  }

}
