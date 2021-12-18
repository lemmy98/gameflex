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
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { UpcomingGamesComponent } from './upcoming-games/upcoming-games.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { GamesComponent } from './games/games.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NewsDetailsComponent } from './news-details/news-details.component';



@NgModule({
  declarations: [
    PagesComponent,
    LandingPageComponent,
    AboutUsComponent,
    NewsComponent,
    VideosComponent,
    ReviewComponent,
    ContactUsComponent,
    TopRatedComponent,
    UpcomingGamesComponent,
    AddReviewComponent,
    GamesComponent,
    CarouselComponent,
    NewsDetailsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
