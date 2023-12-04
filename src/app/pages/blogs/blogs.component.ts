import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit{
  blogData: any[] = [];
  profile: boolean = true;

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.api.fetch_blogs().subscribe((response: any) => {
      if (response.Status && response.data) {
        this.blogData = response.data;
        this.blogData = this.blogData.reverse();
      }
    },
    error => {
      console.log(error);
    });
  }
  blogId(id: string) {
    this.router.navigate(['/blog details', id]);
  }
  
}
