import { CharactersService } from './../../../shared/services/characters.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {

  public details:any = {};
  private characterId: any = 1;
  public routeLocation: string = "";
  public routeOrigin:string = "";
  private subscription!:Subscription;

  constructor(private route: ActivatedRoute, private charactersService:CharactersService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      console.log("Params->", params);
      
      this.characterId = params.get('id');

      console.log('characterId->', this.characterId);

      this.subscription = this.charactersService.getCharacterById(this.characterId).subscribe(details => {
        this.details = details;
        this.routeLocation = (details.location.url) ? details.location.url.substr(details.location.url.search("/location")) : "";
        this.routeOrigin = (details.origin.url) ? details.origin.url.substr(details.origin.url.search("/location")) : "";
      });
    } )
  }

  ngOnDestroy():void {
    this.subscription.unsubscribe();
    console.log("CharacterDetail ngOnDestroy");
  }
}

