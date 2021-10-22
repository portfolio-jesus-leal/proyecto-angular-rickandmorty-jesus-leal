import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsGalleryComponent } from './locations-gallery.component';

describe('LocationsGalleryComponent', () => {
  let component: LocationsGalleryComponent;
  let fixture: ComponentFixture<LocationsGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationsGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
