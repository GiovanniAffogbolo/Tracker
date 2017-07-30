import { IataApiTimezonesRequestClientDevice }       from    './iataapitimezonesrequestclient-device.model';
import { IataApiTimezonesRequestClientAgent }        from    './iataapitimezonesrequestclient-agent.model';

export class IataApiTimezonesRequestClient {
        country_code: string;
        country: string;
        city: string;
        lat: number;
        lng: number;
        ip: string;
        device: IataApiTimezonesRequestClientDevice;
        agent: IataApiTimezonesRequestClientAgent;
}