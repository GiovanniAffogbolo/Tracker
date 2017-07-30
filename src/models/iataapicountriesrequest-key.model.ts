
export class IataApiCountriesRequestKey {
        id: number;
        api_key: string;
        type: string;
        expired?: any;
        registered: Date;
        limits_by_hour: number;
        limits_by_minute: number;
        demo_methods: any[];
        usage_by_hour: number;
        usage_by_minute: number;
}