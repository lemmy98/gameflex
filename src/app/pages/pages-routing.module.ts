import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NewsComponent } from './news/news.component';
import { PagesComponent } from './pages.component';
import { ReviewComponent } from './review/review.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { VideosComponent } from './videos/videos.component';
import { GamesComponent } from './games/games.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { UpcomingGamesComponent } from './upcoming-games/upcoming-games.component';
import { NewsDetailsComponent } from './news-details/news-details.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: '', component: LandingPageComponent},
      {path: 'about-us', component: AboutUsComponent},
      {path: 'contact-us', component: ContactUsComponent},
      {path: 'news', component: NewsComponent},
      {path: 'videos', component: VideosComponent},
      {path: 'review', component: ReviewComponent},
      {path: 'add-review', component: AddReviewComponent},
      {path: 'games', component: GamesComponent},
      {path: 'top-rated', component: TopRatedComponent},
      {path: 'upcoming-games', component: UpcomingGamesComponent},
      {path: 'news-details', component: NewsDetailsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }