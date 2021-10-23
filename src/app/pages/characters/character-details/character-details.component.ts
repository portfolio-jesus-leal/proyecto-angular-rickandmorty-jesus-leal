import { CharactersService } from './../../../shared/services/characters.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {

  public details:any = {};
  private characterId: any = 1;

  constructor(private route: ActivatedRoute, private charactersService:CharactersService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      console.log("Params->", params);
      
      this.characterId = params.get('id');

      console.log('characterId->', this.characterId);

      this.charactersService.getCharacterById(this.characterId).subscribe(details => this.details = details);
    } )
  }
}

