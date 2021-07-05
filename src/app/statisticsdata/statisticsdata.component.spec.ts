import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsdataComponent } from './statisticsdata.component';

describe('StatisticsdataComponent', () => {
  let component: StatisticsdataComponent;
  let fixture: ComponentFixture<StatisticsdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticsdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
