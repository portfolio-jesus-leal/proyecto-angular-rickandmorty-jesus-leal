import { CharactersService } from './../../shared/services/characters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  private page:number = 1;
  public characters:any = {}

  constructor(private charactersService:CharactersService) { }

  ngOnInit(): void {
    this.getCharacterInfo(this.page);
  }

  pageChanged(pageNumber: any) {
    this.page = pageNumber;

    console.log('Characters page ->', this.page);
    this.getCharacterInfo(this.page);
  }
  
  getCharacterInfo(page: number) {
    this.charactersService.getCharacters(page).subscribe(characters => this.characters = characters);
  }
}
