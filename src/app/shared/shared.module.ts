import { PaginationComponent } from './components/pagination/pagination.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './components/filter/filter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PaginationComponent, FilterComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PaginationComponent,
    FilterComponent
  ]
})
export class SharedModule { }
