import { LocationsService } from './../../shared/services/locations.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  locationsList:any = [];
  info:any = {};

  constructor(private locationService:LocationsService) { }

  ngOnInit(): void {
    this.locationService.getLocations().subscribe(locations => {
      this.locationsList = locations.results;
      this.info = locations.info;
      console.log('Locations ->', this.locationsList);
      console.log('Info ->', this.info);
    })
  }

}
