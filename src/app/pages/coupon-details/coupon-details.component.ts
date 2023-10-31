import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DealModalComponent } from 'src/app/shared/comp/deal-modal/deal-modal.component';
import { ApiService } from 'src/app/shared/services/api.service';

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
  constructor(private api: ApiService,
              private route: ActivatedRoute,
              private modalService: NgbModal){}

  ngOnInit(): void {
    // Retrieve the category value from the URL
    this.route.params.subscribe((params) => {
      this.category = params['category'];
      if(this.category === 'food' || this.category === 'fashion' || 
      this.category === 'travel' || this.category === 'tv' || 
      this.category === 'mobiles' || this.category === 'beauty' || 
      this.category === 'computer' || this.category === 'recharge' || 
      this.category === 'appliences' || this.category === 'entertainment' || 
      this.category === 'camera' || this.category === 'kids'){
        // Use the category to fetch data from the API and populate your table
      this.api.getCouponsByCategory(this.category).subscribe(
        (data: any) => {
          if (data) {
            this.posts = data.posts;
            this.websites = data.websites
            this.maincategory = data.posts[0].maincategory;
            // console.log('coupons from posts',this.posts);
            // console.log('coupons from websites',this.websites);
          } else {
            console.error('Invalid response from the API.');
          }
        },
        (error) => {
          console.log('Error:', error);
        }
      );
      }else{
        // Use the Subcategory to fetch data from the API and populate your table
      this.api.getCouponsBySubCategory(this.category).subscribe(
        (data: any) => {
          if (data) {
            this.posts = data.posts;
            this.websites = data.websites
            this.maincategory = data.posts[0].maincategory;
            // console.log('coupons from posts',this.posts);
            // console.log('coupons from websites',this.websites);
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
  couponbywebsite(company: string){
    this.selectedCompany = company;
    this.api.couponbywebsite(company).subscribe( data => {
      this.posts = data.posts;
      // console.log('savesta',this.posts)
    },error => {
      console.log(error);
    });
  }


 //error image handling
 onImageErrorP(event: any) {
  event.target.src = '/assets/image_not_found.png';
}
onImageErrorW(event: any) {
  event.target.src = '/assets/error-loading-image.png';
}

openDealModal(websiteImage: any, WebsiteName:string , Name:string, couponCode: string, urlpath: string) {
  const modalRef = this.modalService.open(DealModalComponent, { size: 'lg', centered: true });
  // You can pass data to the modal if needed using modalRef.componentInstance
  this.data = [websiteImage, WebsiteName, Name, couponCode, urlpath]
  modalRef.componentInstance.data = this.data
  setTimeout(() => {
    window.open(urlpath, '_blank');
  }, 2000);
}
}
