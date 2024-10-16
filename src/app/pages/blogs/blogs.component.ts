import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { faFacebook, faInstagram, faTelegram, faXTwitter, faYoutube, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { Breadcrumbs } from 'src/app/shared/models/breadcrumb.model';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  breadcrumbs: Breadcrumbs[] = [];
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
  faPintrest = faPinterest;

  page: number = 1;
  pageSize: number = 4;

  constructor(
    private api: ApiService,
    private router: Router,
  ) { }

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

    this.setBreadcrumbs();
  }

  blogId(id: string, title: string) {
    const slug = this.formatToSlug(title); // Create a function to format the title to a slug
    this.router.navigate(['/blogs/blog-details', slug, id]);
  }

  formatToSlug(title: string): string {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
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

  setBreadcrumbs() {
    this.breadcrumbs = [
      { label: 'Home', url: '/' },
      { label: 'Blogs', url: '/blogs' }
    ]
  }

}
