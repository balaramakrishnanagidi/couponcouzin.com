import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DealModalComponent } from 'src/app/shared/comp/deal-modal/deal-modal.component';
import { ApiService } from 'src/app/shared/services/api.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

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

  constructor(private api: ApiService,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private meta: Meta) { }

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
    this.meta.addTag({ name: "keywords", content: "couponcouzin, couponcouzin.com, loot deals, best deals, coupon codes, travel, electronics" });
    this.meta.addTag({ name: 'description', content: 'This is the page that shows coupon details.' });

    // to show and hide the discription
    this.posts.forEach(post => post.showBody = true);

    // Retrieve the category value from the URL
    this.route.params.subscribe((params) => {
      this.category = params['category'];

      if (this.category === 'food' || this.category === 'fashion' ||
        this.category === 'travel' || this.category === 'tv' ||
        this.category === 'mobiles' || this.category === 'beauty' ||
        this.category === 'computer' || this.category === 'recharge' ||
        this.category === 'appliances' || this.category === 'entertainment' ||
        this.category === 'camera' || this.category === 'kids') {
        // Use the category to fetch data from the API and populate your table
        this.api.getCouponsByCategory(this.category).subscribe(
          (data: any) => {
            if (data) {
              this.posts = data.posts.reverse();
              this.websites = data.websites.reverse();
              this.maincategory = data.posts[0].maincategory;
            } else {
              console.error('Invalid response from the API.');
            }
          },
          (error) => {
            console.log('Error:', error);
          }
        );
      } else {
        // Use the Subcategory to fetch data from the API and populate your table
       
        this.api.getCouponsBySubCategory(this.category).subscribe(
          (data: any) => {
            if (data) {
              this.posts = data.posts.reverse();
              this.websites = data.websites.reverse();
              this.maincategory = data.posts[0].maincategory;
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
  }


  //For loading cards if there is a selected company
  couponbywebsite(company: string) {
    this.selectedCompany = company;
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
    }, 2000);
  }

  // for show and hide details
  toggleBody(post: any): void {
    post.showBody = !post.showBody;
  }

  // for handling description
  getDescriptionItems(description: string): string[] {
    return description.split('||');
  }

}
