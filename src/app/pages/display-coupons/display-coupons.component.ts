import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/shared/services/api.service';
import { DealModalComponent } from 'src/app/shared/comp/deal-modal/deal-modal.component';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-display-coupons',
  templateUrl: './display-coupons.component.html',
  styleUrls: ['./display-coupons.component.css']
})
export class DisplayCouponsComponent implements OnInit {
  category: string = '';
  posts: any[] = [];
  profile = true;
  data: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 7;
  lastPage: number = 0;
  pagedPosts: any[] = [];
  pages: number[] = [];
  pagesToShowCount = 1;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.meta.addTag({ name:"keywords", content:"couponcouzin, couponcouzin.com, loot deals, best deals, coupon codes, travel, electronics" });
    this.meta.addTag({ name: 'description', content: 'This page displays coupons.' });

    this.route.queryParams.subscribe((params) => {
      this.category = params['name'];
      this.couponbywebsite(this.category);
      
    });
  }

  // For loading cards if there is a selected company
  couponbywebsite(company: string) {    
    this.api.couponbywebsite(company).subscribe((data) => {
      this.posts = data.posts;
      this.posts = this.posts.reverse();
      this.calculatePages();
      this.changePage(1);
    }, (error) => {
      console.log(error);
    });
  }

  // Function to calculate the pages and lastPage
  calculatePages() {
    this.lastPage = Math.ceil(this.posts.length / this.itemsPerPage);
    this.pages = Array.from({ length: this.lastPage }, (_, i) => i + 1);
  }

  // Function to change the current page
  changePage(newPage: number) {
    if (newPage < 1) {
      newPage = 1;
    } else if (newPage > this.lastPage) {
      newPage = this.lastPage;
    }
    this.currentPage = newPage;
    this.pagedPosts = this.posts.slice(
      (this.currentPage - 1) * this.itemsPerPage,
      this.currentPage * this.itemsPerPage
    );
  }

 
  // Function to determine the pages to show in the pagination
  get pagesToShow(): (number | 'ellipsis')[] {
    const pages: (number | 'ellipsis')[] = [];
    const startPage = Math.max(1, this.currentPage - this.pagesToShowCount);
    const endPage = Math.min(this.lastPage, this.currentPage + this.pagesToShowCount);

    if (startPage > 1) {
      pages.push(1);
      if (startPage > 2) {
        pages.push('ellipsis');
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < this.lastPage) {
      if (endPage < this.lastPage - 1) {
        pages.push('ellipsis');
      }
      pages.push(this.lastPage);
    }

    return pages;
  }

  openDealModal(
    websiteImage: any,
    WebsiteName: string,
    Name: string,
    couponCode: string,
    urlpath: string
  ) {
    const modalRef = this.modalService.open(DealModalComponent, {
      size: 'lg',
      centered: true,
    });
    this.data = [websiteImage, WebsiteName, Name, couponCode, urlpath];
    modalRef.componentInstance.data = this.data;
    setTimeout(() => {
      window.open(urlpath, '_blank');
    }, 2000);
  }
  
  toggleBody(post: any): void {
    post.showBody = !post.showBody;
  }

  getDescriptionItems(description: string): string[] {
    return description.split('||');
  }
}
