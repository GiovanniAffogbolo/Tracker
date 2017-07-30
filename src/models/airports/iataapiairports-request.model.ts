import { IataApiAirportsRequestKey }              from    './iataapiairportsrequest-key.model';
import { IataApiAirportsRequestParams }           from    './iataapiairportsrequest-params.model';
import { IataApiAirportsRequestClient }           from    './iataapiairportsrequest-client.model';

export class IataApiAirportsRequest {
    lang: string;
    currency: string;
    time: number;
    id: number;
    server: string;
    host: string;
    pid: number;
    key: IataApiAirportsRequestKey;
    params: IataApiAirportsRequestParams;
    version: number;
    method: string;
    client: IataApiAirportsRequestClient;
}
