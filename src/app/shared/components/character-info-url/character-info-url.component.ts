import { CharactersService } from './../../services/characters.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-info-url',
  templateUrl: './character-info-url.component.html',
  styleUrls: ['./character-info-url.component.scss']
})
export class CharacterInfoUrlComponent implements OnInit {

  @Input() urlCharacter: any = {};
  public character:any = {};

  constructor(private charactersService:CharactersService) { }

  ngOnInit(): void {
    this.charactersService
      .getCharacterByUrl(this.urlCharacter)
      .subscribe((character) => {
        this.character = character;
        console.log('Character Url ->', this.character);
      });
  }
}