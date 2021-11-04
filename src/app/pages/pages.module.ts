import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';


import { PagesComponent } from './pages.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NewsComponent } from './news/news.component';
import { VideosComponent } from './videos/videos.component';
import { ReviewComponent } from './review/review.component';



@NgModule({
  declarations: [
    PagesComponent,
    LandingPageComponent,
    AboutUsComponent,
    NewsComponent,
    VideosComponent,
    ReviewComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
