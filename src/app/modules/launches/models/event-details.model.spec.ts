import { EventDetailsModel } from './event-detail.model';


describe('EventDetailsModel', () => {

  it('should create', () => {
    const eventDetails = new EventDetailsModel(null);
    expect(eventDetails).toBeTruthy();
    expect(eventDetails.missionName).toBeUndefined();
  });

  it('should take input and create dom', () => {
    const rawDetails = {
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
    const eventDetails = new EventDetailsModel(rawDetails);
    expect(eventDetails.landSuccess).toBeTruthy();
  });

  it('should take input and create dom >  null cores: branch', () => {
    const rawDetails = {
      mission_name: 'mission1',
      flight_number: 1,
      mission_id: ['101'],
      launch_year: '2016',
      launch_success: true,
      rocket: {
          first_stage: {
              cores: [null]
          }
      },
      links: {
          mission_patch: 'url',
          mission_patch_small: 'url'
      }
    };
    const eventDetails = new EventDetailsModel(rawDetails);
    expect(eventDetails.landSuccess).toBeFalse();
  });

  it('should take input and create dom >  mission_patch_small missing: branch', () => {
    const rawDetails = {
      mission_name: 'mission1',
      flight_number: 1,
      mission_id: ['101'],
      launch_year: '2016',
      launch_success: true,
      rocket: {
          first_stage: {
              cores: []
          }
      },
      links: {
          mission_patch: 'url1',
          mission_patch_small: null
      }
    };
    const eventDetails = new EventDetailsModel(rawDetails);
    expect(eventDetails.missionPatch.startsWith('https://res.cloudinary.com/')).toBeTrue();
    expect(eventDetails.missionPatch.endsWith('/url1')).toBeTrue();
  });

  it('should take input and create dom >  expected patch link: branch', () => {
    const rawDetails = {
      mission_name: 'mission1',
      flight_number: 1,
      mission_id: ['101'],
      launch_year: '2016',
      launch_success: true,
      rocket: {
          first_stage: {
              cores: []
          }
      },
      links: {
          mission_patch: 'url1',
          mission_patch_small: 'https://images2.imgbox.com/el/434232/2233421sfn2.png'
      }
    };
    const eventDetails = new EventDetailsModel(rawDetails);
    expect(eventDetails.missionPatch.startsWith('https://res.cloudinary.com/')).toBeTrue();
    expect(eventDetails.missionPatch.endsWith('/el/434232/2233421sfn2.png')).toBeTrue();
  });
});
