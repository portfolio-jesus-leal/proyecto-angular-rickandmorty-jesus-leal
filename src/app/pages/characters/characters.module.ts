import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharactersGalleryComponent } from './characters-gallery/characters-gallery.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CharactersComponent,
    CharacterDetailsComponent,
    CharactersGalleryComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    SharedModule
  ]
})
export class CharactersModule { }
