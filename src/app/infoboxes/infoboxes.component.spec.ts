import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoboxesComponent } from './infoboxes.component';

describe('InfoboxesComponent', () => {
  let component: InfoboxesComponent;
  let fixture: ComponentFixture<InfoboxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoboxesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
