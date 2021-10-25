import { Subscription } from 'rxjs';
import { LocationsService } from './../../shared/services/locations.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent implements OnInit {
  private page: number = 1;
  public locationsList: any = [];
  public info: any = {};
  private subscription!: Subscription;

  constructor(private locationService: LocationsService) {}

  ngOnInit(): void {
    this.getLocationsInfo(this.page);
  }

  pageChanged(pageNumber: any) {
    this.page = Number(pageNumber);
    this.getLocationsInfo(this.page);
    console.log('Locations page ->', pageNumber);
  }

  getLocationsInfo(page: number) {
    this.subscription = this.locationService
      .getLocations(this.page)
      .subscribe((locations) => {
        this.locationsList = locations.results;
        this.info = locations.info;
        console.log('Locations ->', this.locationsList);
        console.log('Info ->', this.info);
      });
  }

  searchFor(url: any) {
    if (url.locations.length > 0) {
      this.subscription = this.locationService
        .getLocationByUrl(url.locations)
        .subscribe((locations) => {
          this.locationsList = locations.results;
          this.info = locations.info;
        });
    } else {
      this.getLocationsInfo(this.page);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
