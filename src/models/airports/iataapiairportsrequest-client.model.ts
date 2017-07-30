import { IataApiAirportsRequestClientDevice }         from    './iataapiairportsrequestclient-device.model';
import { IataApiAirportsRequestClientAgent }          from    './iataapiairportsrequestclient-agent.model';

export class IataApiAirportsRequestClient {
        country_code: string;
        country: string;
        city: string;
        lat: number;
        lng: number;
        ip: string;
        device: IataApiAirportsRequestClientDevice;
        agent: IataApiAirportsRequestClientAgent;
}