import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterInfoUrlComponent } from './character-info-url.component';

describe('CharacterInfoUrlComponent', () => {
  let component: CharacterInfoUrlComponent;
  let fixture: ComponentFixture<CharacterInfoUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterInfoUrlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterInfoUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
