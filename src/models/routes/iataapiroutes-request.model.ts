import { IataApiRoutesRequestKey }              from    './iataapiroutesrequest-key.model';
import { IataApiRoutesRequestParams }           from    './iataapiroutesrequest-params.model';
import { IataApiRoutesRequestClient }           from    './iataapiroutesrequest-client.model';

export class IataApiRoutesRequest {
    lang: string;
    currency: string;
    time: number;
    id: number;
    server: string;
    host: string;
    pid: number;
    key: IataApiRoutesRequestKey;
    params: IataApiRoutesRequestParams;
    version: number;
    method: string;
    client: IataApiRoutesRequestClient;
}
