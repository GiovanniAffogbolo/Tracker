import { IataApiCountriesRequestClientDevice }                   from    './iataapicountriesrequestclient-device.model';
import { IataApiCountriesRequestClientAgent }                   from    './iataapicountriesrequestclient-agent.model';

export class IataApiCountriesRequestClient {
        country_code: string;
        country: string;
        city: string;
        lat: number;
        lng: number;
        ip: string;
        device: IataApiCountriesRequestClientDevice;
        agent: IataApiCountriesRequestClientAgent;
}