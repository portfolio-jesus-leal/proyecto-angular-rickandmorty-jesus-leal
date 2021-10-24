import { RouterModule } from '@angular/router';
import { PaginationComponent } from './components/pagination/pagination.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './components/filter/filter.component';
import { FormsModule } from '@angular/forms';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { CharacterInfoUrlComponent } from './components/character-info-url/character-info-url.component';

@NgModule({
  declarations: [
    PaginationComponent, 
    FilterComponent, 
    PageTitleComponent,
    CharacterCardComponent,
    CharacterInfoUrlComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    PaginationComponent,
    FilterComponent,
    PageTitleComponent,
    CharacterCardComponent,
    CharacterInfoUrlComponent
  ]
})
export class SharedModule { }
