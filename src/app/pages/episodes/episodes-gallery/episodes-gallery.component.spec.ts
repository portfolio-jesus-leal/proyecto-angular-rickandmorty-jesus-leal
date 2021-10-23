import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodesGalleryComponent } from './episodes-gallery.component';

describe('EpisodesGalleryComponent', () => {
  let component: EpisodesGalleryComponent;
  let fixture: ComponentFixture<EpisodesGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodesGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodesGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
