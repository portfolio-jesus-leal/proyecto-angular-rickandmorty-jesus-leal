import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesRoutingModule } from './episodes-routing.module';
import { EpisodesComponent } from './episodes.component';
import { EpisodeDetailsComponent } from './episode-details/episode-details.component';
import { EpisodesGalleryComponent } from './episodes-gallery/episodes-gallery.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EpisodesComponent,
    EpisodeDetailsComponent,
    EpisodesGalleryComponent
  ],
  imports: [
    CommonModule,
    EpisodesRoutingModule,
    SharedModule
  ]
})
export class EpisodesModule { }
