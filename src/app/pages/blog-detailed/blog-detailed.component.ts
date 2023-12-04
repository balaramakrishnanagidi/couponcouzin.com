import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-blog-detailed',
  templateUrl: './blog-detailed.component.html',
  styleUrls: ['./blog-detailed.component.css']
})
export class BlogDetailedComponent implements OnInit{
  blogId!: string; 
  blogData: any[] = [];
  profile: boolean = true;
  myForm!: FormGroup;
  constructor(  private api: ApiService, 
                private route: ActivatedRoute, 
                private fb: FormBuilder ) {}

  ngOnInit(): void {
    this.createForm();
    this.fetch_blog_by_id();
  }

  fetch_blog_by_id(){
    this.route.params.subscribe(params => {
      this.blogId = params['id'];
      console.log('Blog ID:', this.blogId);
    });

    this.api.fetch_blog_by_id(this.blogId).subscribe((response: any) => {
      if (response.Status && response.data) {
        this.blogData = response.data;
        this.blogData = this.blogData.reverse();
      }
    },
    error => {
      console.log(error);
      
    });
  }

  createForm(){
    this.myForm = this.fb.group({
      comment: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      website: ['']
    });
  }

  submitForm(){
    if(this.myForm.valid){

      console.log('Form Data:', this.myForm.value);

      const formData = new FormData();

      formData.append('comment', this.myForm.get('comment')!.value);
      formData.append('name', this.myForm.get('name')!.value);
      formData.append('email', this.myForm.get('email')!.value);
      formData.append('website', this.myForm.get('website')?.value);

      this.myForm.reset();
    }


  }

}
