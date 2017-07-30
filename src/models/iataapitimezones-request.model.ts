import { IataApiTimezonesRequestKey }              from    './iataapitimezonesrequest-key.model';
import { IataApiTimezonesRequestParams }           from    './iataapitimezonesrequest-params.model';
import { IataApiTimezonesRequestClient }           from    './iataapitimezonesrequest-client.model';

export class IataApiTimezonesRequest {
    lang: string;
    currency: string;
    time: number;
    id: number;
    server: string;
    host: string;
    pid: number;
    key: IataApiTimezonesRequestKey;
    params: IataApiTimezonesRequestParams;
    version: number;
    method: string;
    client: IataApiTimezonesRequestClient;
}