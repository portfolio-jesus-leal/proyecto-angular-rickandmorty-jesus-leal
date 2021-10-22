import { LocationsService } from './../../../shared/services/locations.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.scss']
})
export class LocationDetailsComponent implements OnInit {

  locationDetails:any = {};

  constructor(private route:ActivatedRoute, private locationsService:LocationsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( param => {
      let idLocation = param.get('id');
      console.log('idLocation->', idLocation);
      this.locationsService.getLocationById(idLocation).subscribe( location => {
        console.log('location->', location);
        this.locationDetails = location;
      })
    })
  }

}
