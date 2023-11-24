import { OnDestroy, ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Subject, timer, takeUntil } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.Emulated // or .Native
})
export class HomeComponent implements OnInit, OnDestroy {
  loadingData: boolean = true;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(private meta: Meta){

  }

  ngOnInit(): void {
    this.meta.addTag({ name: 'description', content: 'Home page of couponcouzin.com' });
    this.meta.addTag({ name:"keywords", content:"couponcouzin, couponcouzin.com, loot deals, best deals, coupon codes, travel, electronics" });

    // Simulate a 5-second delay before loading the content
    timer(800) // Emit a value after 5 seconds
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.loadingData = false; // Hide loading animation after 5 seconds
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
