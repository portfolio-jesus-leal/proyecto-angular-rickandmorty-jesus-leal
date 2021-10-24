import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharactersGalleryComponent } from './characters-gallery/characters-gallery.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CharacterCardComponent } from './characters-gallery/character-card/character-card.component';

@NgModule({
  declarations: [
    CharactersComponent,
    CharacterDetailsComponent,
    CharactersGalleryComponent,
    CharacterCardComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    SharedModule
  ]
})
export class CharactersModule { }
