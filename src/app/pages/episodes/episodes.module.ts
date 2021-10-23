import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesRoutingModule } from './episodes-routing.module';
import { EpisodesComponent } from './episodes.component';
import { EpisodeDetailsComponent } from './episode-details/episode-details.component';
import { EpisodesGalleryComponent } from './episodes-gallery/episodes-gallery.component';


@NgModule({
  declarations: [
    EpisodesComponent,
    EpisodeDetailsComponent,
    EpisodesGalleryComponent
  ],
  imports: [
    CommonModule,
    EpisodesRoutingModule
  ]
})
export class EpisodesModule { }
