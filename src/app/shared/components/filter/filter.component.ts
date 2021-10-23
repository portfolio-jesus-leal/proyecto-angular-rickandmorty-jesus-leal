import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  public textToFilter:string = '';
  public filterURL:string = ""

  constructor() { }

  ngOnInit(): void {
  }

  filter() {

    if (this.textToFilter.length > 0) {
      this.filterURL = `https://rickandmortyapi.com/api/character/?name=${this.textToFilter}`;
      console.log('Filter -> ', this.filterURL);
    }
  }
}