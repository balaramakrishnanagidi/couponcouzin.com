import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/shared/services/api.service';
import { DealModalComponent } from 'src/app/shared/comp/deal-modal/deal-modal.component';

@Component({
  selector: 'app-display-coupons',
  templateUrl: './display-coupons.component.html',
  styleUrls: ['./display-coupons.component.css']
})
export class DisplayCouponsComponent implements OnInit {

  name: string = '';
  posts: any[] = [];
  profile = true;
  data: any[] = [];
  webImage: string = '';

  constructor(private route: ActivatedRoute,
              private api: ApiService,
              private modal: NgbModal) { }

  ngOnInit(): void {
    this.loadCoupons();
  }

  loadCoupons() {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    })

    this.api.couponbywebsite(this.name).subscribe(res => {
      this.posts = res.posts;
      this.webImage = this.posts[0].websiteImage;
      console.log('res for couponbywebsite: ', res)
      console.log(this.posts)
    }, error => {
      console.error(error)
    })
  }
  openDealModal(websiteImage: any, Name:string , description:string, couponCode: string, urlpath: string) {
    const modalRef = this.modal.open(DealModalComponent, { size: 'md' });
    // You can pass data to the modal if needed using modalRef.componentInstance
    this.data = [websiteImage, Name, description, couponCode, urlpath]
    modalRef.componentInstance.data = this.data
    setTimeout(() => {
      window.open(urlpath, '_blank');
    }, 2000);
  }
}
