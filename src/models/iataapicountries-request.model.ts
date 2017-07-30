import { IataApiCountriesRequestKey }              from    './iataapicountriesrequest-key.model';
import { IataApiCountriesRequestParams }                   from    './iataapicountriesrequest-params.model';
import { IataApiCountriesRequestClient }                   from    './iataapicountriesrequest-client.model';

export class IataApiCountriesRequest {
    lang: string;
    currency: string;
    time: number;
    id: number;
    server: string;
    host: string;
    pid: number;
    key: IataApiCountriesRequestKey;
    params: IataApiCountriesRequestParams;
    version: number;
    method: string;
    client: IataApiCountriesRequestClient;
}
