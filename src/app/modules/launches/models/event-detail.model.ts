export interface IEventDetailsModel {
    mission_name: string;
    flight_number: number;
    mission_id: string[];
    launch_year: string;
    launch_success: boolean;
    rocket: {
        first_stage: {
            cores: {
                land_success: boolean
            }[]
        }
    };
    links: {
        mission_patch: string;
        mission_patch_small: string;
    };
}


export class EventDetailsModel {
    missionName: string;
    flightNumber: number;
    missionId: string[];
    launchYear: string;
    launchSuccess: boolean;
    landSuccess: boolean;
    missionPatch: string;
    constructor(eventDetails: IEventDetailsModel) {
        this.missionName = eventDetails?.mission_name;
        this.flightNumber = eventDetails?.flight_number;
        this.missionId = eventDetails?.mission_id;
        this.launchYear = eventDetails?.launch_year;
        this.launchSuccess = eventDetails?.launch_success;
        this.landSuccess = eventDetails?.rocket?.first_stage?.cores?.every(el => el?.land_success);
        this.missionPatch = this.cloudinarize(eventDetails?.links?.mission_patch_small || eventDetails?.links?.mission_patch);
    }

    private cloudinarize(rawUrl: string, cloudName = 'dw9ojz2hi', folder = 'v1605185972/xt-media',
                         optimizations= 'ar_1:1,c_fill/c_scale,w_auto,dpr_auto,q_auto,f_auto') {
        const mappedPrefix = 'https://images2.imgbox.com/';
        let url = '';
        let path = '';
        if (rawUrl?.startsWith(mappedPrefix)) {
            path = rawUrl.replace(mappedPrefix, '');
            url = 'https://res.cloudinary.com/{{cloudName}}/image/upload/{{optimizations}}/{{folder}}/{{path}}';
        } else if (rawUrl) {
            path = rawUrl;
            url = 'https://res.cloudinary.com/{{cloudName}}/image/fetch/{{optimizations}}/{{path}}';
        } else {
            folder = 'v1605185972';
            url = 'https://res.cloudinary.com/{{cloudName}}/image/upload/{{optimizations}}/{{folder}}/loader.jpg';
        }
        return url.replace('{{cloudName}}', cloudName)
            .replace('{{folder}}', folder)
            .replace('{{optimizations}}', optimizations)
            .replace('{{path}}', path);
    }
}
