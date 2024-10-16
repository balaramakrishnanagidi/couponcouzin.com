import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, timer, takeUntil } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  loadingData: boolean = true;
  private destroy$: Subject<void> = new Subject<void>();

  constructor() {}

  ngOnInit(): void {
    // Simulate a loading state
    timer(800).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.loadingData = false;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
