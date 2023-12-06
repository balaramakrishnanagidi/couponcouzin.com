import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { faFacebook, faInstagram, faTelegram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit{
  
  blogData: any[] = [];
  recentPosts: any[] = [];
  profile: boolean = true;
  searchInput: string = '';
  searchResult: any[] = [];

  faYoutube = faYoutube;
  faInsta = faInstagram;
  faTwitter = faXTwitter;
  faTelegram = faTelegram;
  faFacebook = faFacebook;

  page: number = 1;
  pageSize: number = 4;

  constructor(
    private api: ApiService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.api.fetch_blogs().subscribe(
      (response: any) => {
        if (response.Status && response.data) {
          this.blogData = response.data;
          this.blogData = this.blogData.reverse();
          this.getRecentPosts();
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  blogId(id: string) {
    this.router.navigate(['/blog details', id]);
  }
  getRecentPosts() {
    this.recentPosts = this.blogData.slice(0, 5);
  }
  
  isSearchInputEmpty(): boolean {
    return !this.searchInput.trim();
  }

  search() {
    const searchUrl = `/search?title=${this.searchInput}`;
    this.router.navigateByUrl(searchUrl);
  }

  //pagination
  get paginatedBlogData(): any[] {
    const startIndex = (this.page - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.blogData.slice(startIndex, endIndex);
  }

  pageChanged(event: any): void {
    this.page = event;
    this.getRecentPosts();
    this.scrollToTop();
  }

  private scrollToTop() {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
