import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations-gallery',
  templateUrl: './locations-gallery.component.html',
  styleUrls: ['./locations-gallery.component.scss']
})
export class LocationsGalleryComponent implements OnInit {

  @Input() locationsList:any = [];
  @Input() info:any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
