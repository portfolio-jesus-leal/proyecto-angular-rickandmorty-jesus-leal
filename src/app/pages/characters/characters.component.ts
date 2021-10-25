import { Subscription } from 'rxjs';
import { CharactersService } from './../../shared/services/characters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  private page: number = 1;
  public characters: any = {};
  private subscription!: Subscription;

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.getCharactersInfo(this.page);
  }

  pageChanged(pageNumber: any) {
    this.page = pageNumber;

    console.log('Characters page ->', this.page);
    this.getCharactersInfo(this.page);
  }

  getCharactersInfo(page: number) {
    this.subscription = this.charactersService
      .getCharacters(page)
      .subscribe((characters) => (this.characters = characters));
  }

  searchFor(url: any) {
    if (url.characters.length > 0) {
      this.subscription = this.charactersService
        .getCharacterByUrl(url.characters)
        .subscribe((characters) => (this.characters = characters));
    } else {
      this.subscription = this.charactersService
        .getCharacters(this.page)
        .subscribe((characters) => (this.characters = characters));
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
