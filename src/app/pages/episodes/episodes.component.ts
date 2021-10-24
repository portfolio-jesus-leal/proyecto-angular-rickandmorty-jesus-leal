import { EpisodesService } from './../../shared/services/episodes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  private page:number = 1;
  public episodesList:any = [];
  public info:any = {};

  constructor(private episodeService:EpisodesService) { }

  ngOnInit(): void {
    this.getEpisodesInfo(this.page);
  }
  
  pageChanged(pageNumber: any) {
    this.page = Number(pageNumber);
    this.getEpisodesInfo(this.page);
    console.log('Episodes page ->', this.page);
    //this.getCharacterInfo(this.page);
  }
  
  getEpisodesInfo(page: number) {
    this.episodeService.getEpisodes(this.page).subscribe(episodes => {
      this.episodesList = episodes.results;
      this.info = episodes.info;
      console.log('Episodes ->', this.episodesList);
      console.log('Info ->', this.info);
    });
  }
  
}
