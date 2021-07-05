import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersstatisticsdataComponent } from './membersstatisticsdata.component';

describe('MembersstatisticsdataComponent', () => {
  let component: MembersstatisticsdataComponent;
  let fixture: ComponentFixture<MembersstatisticsdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembersstatisticsdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersstatisticsdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
