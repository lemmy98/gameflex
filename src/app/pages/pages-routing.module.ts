import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { NewsComponent } from './news/news.component';
import { PagesComponent } from './pages.component';
import { ReviewComponent } from './review/review.component';
import { VideosComponent } from './videos/videos.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: '', component: LandingPageComponent},
      {path: 'about-us', component: AboutUsComponent},
      {path: 'news', component: NewsComponent},
      {path: 'videos', component: VideosComponent},
      {path: 'review', component: ReviewComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
