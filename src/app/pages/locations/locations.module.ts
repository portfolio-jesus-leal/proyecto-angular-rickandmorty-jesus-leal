import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing.module';
import { LocationsComponent } from './locations.component';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { LocationsGalleryComponent } from './locations-gallery/locations-gallery.component';


@NgModule({
  declarations: [
    LocationsComponent,
    LocationDetailsComponent,
    LocationsGalleryComponent
  ],
  imports: [
    CommonModule,
    LocationsRoutingModule
  ]
})
export class LocationsModule { }
