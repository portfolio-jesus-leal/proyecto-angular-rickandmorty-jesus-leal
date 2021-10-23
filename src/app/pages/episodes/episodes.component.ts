import { EpisodesService } from './../../shared/services/episodes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  episodesList:any = [];
  info:any = {};

  constructor(private episodeService:EpisodesService) { }

  ngOnInit(): void {
    this.episodeService.getEpisodes().subscribe(episodes => {
      this.episodesList = episodes.results;
      this.info = episodes.info;
      console.log('Episodes ->', this.episodesList);
      console.log('Info ->', this.info);
    })
  }

}
