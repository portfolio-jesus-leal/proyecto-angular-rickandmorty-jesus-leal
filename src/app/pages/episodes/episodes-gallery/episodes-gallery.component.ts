import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-episodes-gallery',
  templateUrl: './episodes-gallery.component.html',
  styleUrls: ['./episodes-gallery.component.scss']
})
export class EpisodesGalleryComponent implements OnInit {

  @Input() episodesList:any = [];
  @Input() info:any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
