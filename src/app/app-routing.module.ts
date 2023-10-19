import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AllDealsComponent } from './pages/all-deals/all-deals.component';
import { CouponDetailsComponent } from './pages/coupon-details/coupon-details.component';
import { SearchComponent } from './pages/search/search.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { SecurityComponent } from './pages/security/security.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { TermsComponent } from './pages/terms/terms.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { DisplayCouponsComponent } from './pages/display-coupons/display-coupons.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'allDeals', component: AllDealsComponent},
  {path:'coupon/:category', component: CouponDetailsComponent},
  // {path:'coupons', component: DisplayCouponsComponent},
  {path:'search-results', component: SearchComponent},
  {path:'contact us', component: ContactComponent},
  {path:'security tips', component: SecurityComponent},
  {path:'privacy policy', component: PrivacyComponent},
  {path:'terms and conditions', component: TermsComponent},
  {path:'about us', component: AboutUsComponent},
  {path:'Freaquently Asked Questions', component: FaqsComponent},
  {path:'', component: HomeComponent},
  {path:'**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
