import { ComponentFixture, TestBed } from '@angular/core/testing';
import { url } from 'inspector';

import { EventDetailsComponent } from './event-details.component';

describe('EventDetailsComponent', () => {
  let component: EventDetailsComponent;
  let fixture: ComponentFixture<EventDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should take input and create dom', () => {

    component.rowDetails = {
      mission_name: 'mission1',
      flight_number: 1,
      mission_id: ['101'],
      launch_year: '2016',
      launch_success: true,
      rocket: {
          first_stage: {
              cores: [{
                  land_success: true
              }]
          }
      },
      links: {
          mission_patch: 'url',
          mission_patch_small: 'url'
      }
    };
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.card-title').textContent).toContain('mission1 #1');
  });

  it('should get rowDetails as is', () => {

    const rowDetails = {
      mission_name: 'mission1',
      flight_number: 1,
      mission_id: ['101'],
      launch_year: '2016',
      launch_success: true,
      rocket: {
          first_stage: {
              cores: [{
                  land_success: true
              }]
          }
      },
      links: {
          mission_patch: 'url',
          mission_patch_small: 'url'
      }
    };
    component.rowDetails = rowDetails;
    expect(component.rowDetails).toEqual(rowDetails);
  });
});
