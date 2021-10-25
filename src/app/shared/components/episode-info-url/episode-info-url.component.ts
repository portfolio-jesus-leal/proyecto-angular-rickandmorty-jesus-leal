import { Subscription } from 'rxjs';
import { EpisodesService } from './../../services/episodes.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-episode-info-url',
  templateUrl: './episode-info-url.component.html',
  styleUrls: ['./episode-info-url.component.scss']
})
export class EpisodeInfoUrlComponent implements OnInit {

  @Input() urlEpisode:any = {};
  public episode:any = {};
  private subscription!:Subscription;

  constructor(private episodesService:EpisodesService) { }

  ngOnInit(): void {
    this.subscription = this.episodesService
      .getEpisodeByUrl(this.urlEpisode)
      .subscribe((episode) => {
        this.episode = episode;
      });
  }

  ngOnDestroy():void {
    this.subscription.unsubscribe();
  }

}
