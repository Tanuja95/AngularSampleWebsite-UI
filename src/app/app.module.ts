import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContentsectionComponent } from './contentsection/contentsection.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { FooterComponent } from './footer/footer.component';
import { CustomersComponent } from './customers/customers.component';
import { PricingComponent } from './pricing/pricing.component';
import { HeaderComponent } from './header/header.component';
import { NavigationsComponent } from './navigations/navigations.component';
import { SocialIconsComponent } from './social-icons/social-icons.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    GalleryComponent,
    ContentsectionComponent,
    TestimonialComponent,
    FooterComponent,
    CustomersComponent,
    PricingComponent,
    HeaderComponent,
    NavigationsComponent,
    SocialIconsComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
