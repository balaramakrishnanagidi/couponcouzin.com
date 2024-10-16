import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faYoutube, faInstagram, faXTwitter, faTelegram, faFacebook, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faStore } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { Breadcrumbs } from 'src/app/shared/models/breadcrumb.model';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-blog-detailed',
  templateUrl: './blog-detailed.component.html',
  styleUrls: ['./blog-detailed.component.css']
})
export class BlogDetailedComponent implements OnInit {
  breadcrumbs: Breadcrumbs[] = [];
  blog: any;
  blogId!: string;
  blogData: any[] = [];
  profile: boolean = true;
  myForm = {
    text: '',
    name: '',
    email: '',
    website: ''
  };
  comments: any = [];
  recentPosts: any[] = [];
  searchInput: string = '';
  displayedSearchText: string = '';
  searchResult: any[] = [];
  isSearched: boolean = false;
  isResult: boolean = false;

  faYoutube = faYoutube;
  faInsta = faInstagram;
  faTwitter = faXTwitter;
  faTelegram = faTelegram;
  faFacebook = faFacebook;
  faFirstOrder = faStore;
  faPinterest = faPinterest;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.blogId = this.route.snapshot.params['id'] || '';
    this.searchInput = this.route.snapshot.queryParamMap.get('title') || '';

    if (this.blogId) {
      this.fetch_blog_by_id();

    } else if (this.searchInput) {
      this.isSearched = true;
      this.search();
    }

    this.recent_posts();
    this.scrollToTop();
    this.setBreadcrumbs();
  }

  scrollToTop() {
    // Use Renderer2 to manipulate the DOM
    const scrollTop = 0;
    this.renderer.setProperty(document.documentElement, 'scrollTop', scrollTop);
    this.renderer.setProperty(document.body, 'scrollTop', scrollTop);
  }



  fetch_blog_by_id() {
    this.api.fetch_blog_by_id(this.blogId!).subscribe(
      (response: any) => {
        if (response.Status && response.data) {
          this.blogData = response.data;
          this.blogData = this.blogData.reverse();
          this.fetch_comments_for_blog();
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  recent_posts() {
    this.api.fetch_blogs().subscribe((response: any) => {
      if (response.Status && response.data) {
        this.recentPosts = response.data;
        this.recentPosts = this.recentPosts.slice(0, 5);
      }
    },
      error => {
        console.log(error);
      });
  }
  fetch_comments_for_blog() {
    this.api.fetch_comments(this.blogId).subscribe(response => {
      this.comments = response.data;
      console.log("fetced comments", this.comments);

      this.comments = this.comments.reverse();
    }, error => {
      console.log(error);
    });

  }

  isSubmitDisabled(): boolean {
    return !this.myForm.text || !this.myForm.name || !this.myForm.email;
  }

  reset() {
    this.myForm = {
      text: '',
      name: '',
      email: '',
      website: ''
    };
  }

  get_blogId(newId: string) {
    // Get the current base URL
    const currentUrl = window.location.origin;

    // Construct the new URL
    const newUrl = `${currentUrl}/blog-details/${newId}`;

    // Navigate to the new URL
    window.location.href = newUrl;
  }

  isSearchInputEmpty(): boolean {
    return !this.searchInput.trim();
  }

  submitForm() {
    const obj = {
      blogId: this.blogId, text: this.myForm.text, name: this.myForm.name,
      email: this.myForm.email, website: this.myForm.website
    };

    this.api.post_comment_on_blog(obj).subscribe(response => {
      console.log(response);
      // this.toastr.success('Comment posted successfully!', 'Success', { timeOut: 3000, positionClass: 'toast-center-right' });
      this.reset();
    }, error => {
      console.log(error);
      this.toastr.error('Failed to post comment', 'Error');
    });
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }


  //search blogs

  search() {
    this.isSearched = true;
    this.isResult = false;
    this.api.search_blog(this.searchInput).subscribe(response => {
      this.searchResult = response.data;
      this.displayedSearchText = this.searchInput;

      // Update URL with new search text
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { title: this.searchInput },
        queryParamsHandling: 'merge',
      });

      if (this.searchResult.length > 0) {
        this.isResult = true;
      }

      // Remove the 'id' parameter from the URL
      if (this.blogId) {
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: { id: null },
          queryParamsHandling: 'merge',
        });
      }

    }, error => {
      console.log(error);
    });
  }

  setBreadcrumbs() {
    this.breadcrumbs = [
      {label: 'Home', url: '/'},
      {label: 'Blogs', url: '/blogs'},
      {label: 'Blog-details', url: ''}
    ]
  }

}
