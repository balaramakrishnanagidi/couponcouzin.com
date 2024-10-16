import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AllDealsComponent } from './pages/all-deals/all-deals.component';
import { CouponDetailsComponent } from './pages/coupon-details/coupon-details.component';
import { SearchComponent } from './pages/search/search.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { SecurityComponent } from './pages/security/security.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { TermsComponent } from './pages/terms/terms.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { DisplayCouponsComponent } from './pages/display-coupons/display-coupons.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { BlogDetailedComponent } from './pages/blog-detailed/blog-detailed.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { AmazonStoreComponent } from './pages/amazon-store/amazon-store.component';
import { FlipkartStoreComponent } from './pages/flipkart-store/flipkart-store.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  // {path:'home', component: HomeComponent},
  {path:'allDeals', component: AllDealsComponent},
  {path:'coupons/:category', component: CouponDetailsComponent},
  {path:'coupons', component: DisplayCouponsComponent},
  {path:'search-results', component: SearchComponent},
  // {path:'contact-us', component: ContactComponent},
  {path:'blogs', component: BlogsComponent},
  {path:'security-tips', component: SecurityComponent},
  {path:'privacy-policy', component: PrivacyComponent},
  {path:'terms-and-conditions', component: TermsComponent},
  {path:'about-us', component: AboutUsComponent},
  {path:'Freaquently-Asked-Questions', component: FaqsComponent},
  {path:'blogs/blog-details/:blogName/:id', component: BlogDetailedComponent},
  {path: 'search', component: BlogDetailedComponent},
  {path: 'products/:maincategory/product-details/:productName/:id', component: ProductDetailsComponent},
  {path: 'store/amazon', component: AmazonStoreComponent},
  {path: 'store/flipkart', component: FlipkartStoreComponent},
  {path:'**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
