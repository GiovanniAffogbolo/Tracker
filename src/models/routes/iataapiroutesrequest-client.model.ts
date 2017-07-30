import { IataApiRoutesRequestClientDevice }         from    './iataapiroutesrequestclient-device.model';
import { IataApiRoutesRequestClientAgent }          from    './iataapiroutesrequestclient-agent.model';

export class IataApiRoutesRequestClient {
        country_code: string;
        country: string;
        city: string;
        lat: number;
        lng: number;
        ip: string;
        device: IataApiRoutesRequestClientDevice;
        agent: IataApiRoutesRequestClientAgent;
}