import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';


import { TabsModule, TabsetConfig } from 'ngx-bootstrap/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './pages/top-nav-bar/top-nav-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './shared/comp/carousel/carousel.component';
import { TopCarouselComponent } from './shared/comp/top-carousel/top-carousel.component';
import { TopdealsComponent } from './pages/topdeals/topdeals.component';
import { FirstLetterUpperCasePipe } from './shared/pipes/first-letter-upper-case.pipe';
import { FormsModule } from '@angular/forms';
import { AllDealsComponent } from './pages/all-deals/all-deals.component';
import { LoadingSpinnerComponent } from './shared/comp/loading-spinner/loading-spinner.component';
import { CouponDetailsComponent } from './pages/coupon-details/coupon-details.component';
import { DealModalComponent } from './shared/comp/deal-modal/deal-modal.component';
import { ToastrModule } from 'ngx-toastr';
import { SearchComponent } from './pages/search/search.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ContactComponent } from './pages/contact/contact.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { SecurityComponent } from './pages/security/security.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { TermsComponent } from './pages/terms/terms.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { TopStoresComponent } from './pages/top-stores/top-stores.component';
import { DisplayCouponsComponent } from './pages/display-coupons/display-coupons.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { BlogDetailedComponent } from './pages/blog-detailed/blog-detailed.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { BankWalletOffersComponent } from './pages/bank-wallet-offers/bank-wallet-offers.component';
import { CategoryiconsComponent } from './pages/categoryicons/categoryicons.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';



@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    HomeComponent,
    CarouselComponent,
    TopCarouselComponent,
    TopdealsComponent,
    FirstLetterUpperCasePipe,
    AllDealsComponent,
    LoadingSpinnerComponent,
    CouponDetailsComponent,
    DealModalComponent,
    SearchComponent,
    ContactComponent,
    FaqsComponent,
    SecurityComponent,
    PrivacyComponent,
    TermsComponent,
    AboutUsComponent,
    TopStoresComponent,
    DisplayCouponsComponent,
    BlogsComponent,
    BlogDetailedComponent,
    BankWalletOffersComponent,
    CategoryiconsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    TabsModule,
    FormsModule,
    ToastrModule.forRoot(),
    CarouselModule,
    TooltipModule.forRoot(),
    FlexLayoutModule,
    FontAwesomeModule,
    NgxPaginationModule,
    NgxGoogleAnalyticsModule.forRoot('MEASUREMENT-ID'),
    NgxGoogleAnalyticsRouterModule,
    MatTabsModule,
    MatTooltipModule
  ],
  providers: [TabsetConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
