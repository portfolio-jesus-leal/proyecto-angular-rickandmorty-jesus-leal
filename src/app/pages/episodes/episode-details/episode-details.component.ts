import { EpisodesService } from './../../../shared/services/episodes.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.scss']
})
export class EpisodeDetailsComponent implements OnInit {

  episodeDetails:any = {};

  constructor(private route:ActivatedRoute, private episodesService:EpisodesService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( param => {
      let idEpisode = param.get('id');
      console.log('idEpisode->', idEpisode);
      this.episodesService.getEpisodeById(idEpisode).subscribe( episode => {
        console.log('episode->', episode);
        this.episodeDetails = episode;
      })
    })
  }

}
