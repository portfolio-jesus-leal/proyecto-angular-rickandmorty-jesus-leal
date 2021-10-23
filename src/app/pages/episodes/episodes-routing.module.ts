import { EpisodeDetailsComponent } from './episode-details/episode-details.component';
import { EpisodesComponent } from './episodes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'', component:EpisodesComponent
  },
  {
    path:':id', component:EpisodeDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodesRoutingModule { }
