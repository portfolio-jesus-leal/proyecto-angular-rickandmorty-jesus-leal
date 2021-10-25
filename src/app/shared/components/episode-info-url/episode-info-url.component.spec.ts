import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeInfoUrlComponent } from './episode-info-url.component';

describe('EpisodeInfoUrlComponent', () => {
  let component: EpisodeInfoUrlComponent;
  let fixture: ComponentFixture<EpisodeInfoUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodeInfoUrlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeInfoUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
