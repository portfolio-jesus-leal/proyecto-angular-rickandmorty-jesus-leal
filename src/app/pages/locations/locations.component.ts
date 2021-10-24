import { LocationsService } from './../../shared/services/locations.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  private page:number = 1;
  public locationsList:any = [];
  public info:any = {};

  constructor(private locationService:LocationsService) { }

  ngOnInit(): void {
    this.getLocationsInfo(this.page);
  }

  pageChanged(pageNumber: any) {
    this.page = Number(pageNumber);
    this.getLocationsInfo(this.page);
    console.log('Locations page ->', pageNumber);
  }

  getLocationsInfo(page: number) {
    this.locationService.getLocations(this.page).subscribe(locations => {
      this.locationsList = locations.results;
      this.info = locations.info;
      console.log('Locations ->', this.locationsList);
      console.log('Info ->', this.info);
    });
  }

}
