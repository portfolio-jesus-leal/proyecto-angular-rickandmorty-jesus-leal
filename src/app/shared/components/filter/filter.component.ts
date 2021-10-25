import { CharactersService } from './../../services/characters.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output() searchFor = new EventEmitter<string>();
  public textToFilter:string = '';
  public filterURL:any = {};
  private filterUrlC:string = "";
  private filterUrlL:string = "";
  private filterUrlE:string = "";

  constructor(private charactersService:CharactersService) { }

  ngOnInit(): void {
  }

  filter() {
    if (this.textToFilter.length > 0) {
      this.filterUrlC = `https://rickandmortyapi.com/api/character/?name=${this.textToFilter}`;
      this.filterUrlL = `https://rickandmortyapi.com/api/location?name=${this.textToFilter}`;
      this.filterUrlE = `https://rickandmortyapi.com/api/episode?name=${this.textToFilter}`;
      console.log('Filter -> ', this.filterUrlC);
    }
  }

  search() {
    this.filterURL.characters = this.filterUrlC;
    this.filterURL.locations = this.filterUrlL;
    this.filterURL.episodes = this.filterUrlE;
    this.searchFor.emit(this.filterURL);
  }
}