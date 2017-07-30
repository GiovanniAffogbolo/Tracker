//core components
import {    Injectable  }                   from '@angular/core';
import {    Http  }                         from '@angular/http';

//rxJS
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

//import du modèle iataapicountries
import { IataApiCountries } from '../models/iataapi-countries.model';
//import du modèle iataapitimezones
import { IataApiTimezones } from '../models/iataapi-timezones.model';
//import du modèle iataapiroutes
import { IataApiRoutes } from '../models/routes/iataapi-routes.model';
//import du modèle iataapiairports
import { IataApiAirports } from '../models/airports/iataapi-airports.model';

@Injectable()
export class IataApiService {

    private baseUrl: string = 'https://iatacodes.org/api/v6/';
    private api_key: string = 'd6cc42af-38d0-4c67-98c5-150008931415';
    //public destination: string;


    constructor(private http: Http) {

    }

    public getCountries(): Promise<IataApiCountries> {
        const url: string = this.baseUrl+'countries?api_key='+this.api_key;
        
        return this.http.get(url)
        .toPromise()
        .then(response => response.json() as IataApiCountries)
        .catch(error => console.log('Erreur IataApiCountries : ' + error));
    }

    public getTimezones(): Promise<IataApiTimezones> {
        const url1: string = this.baseUrl+'timezones?api_key='+this.api_key;
        
        return this.http.get(url1)
        .toPromise()
        .then(reponse => reponse.json() as IataApiTimezones)
        .catch(error => console.log('Erreur IataApiTimezones : ' + error));
    }

    public getRoutes(destination: string): Promise<IataApiRoutes> {
        const url4: string = this.baseUrl+'routes?api_key='+this.api_key+'&arrival='+destination;
        
        return this.http.get(url4)
        .toPromise()
        .then(reponse => reponse.json() as IataApiRoutes)
        .catch(error => console.log('Erreur IataApiRoutes : ' + error));
    }

     public getRoutesDepart(depart: string): Promise<IataApiRoutes> {
        const urld: string = this.baseUrl+'routes?api_key='+this.api_key+'&departure='+depart;
        
        return this.http.get(urld)
        .toPromise()
        .then(reponse => reponse.json() as IataApiRoutes)
        .catch(error => console.log('Erreur IataApiRoutes : ' + error));
    }

    public getAirports(): Promise<IataApiAirports> {
        const url3: string = this.baseUrl+'airports?api_key='+this.api_key;
        
        return this.http.get(url3)
        .toPromise()
        .then(reponse => reponse.json() as IataApiAirports)
        .catch(error => console.log('Erreur IataApiAirports : ' + error));
    }

    public getAirportS(answer: string): Promise<IataApiRoutes> {
        const urls: string = this.baseUrl+'airports?api_key='+this.api_key+'&code='+answer;
        
        return this.http.get(urls)
        .toPromise()
        .then(reponse => reponse.json() as IataApiRoutes)
        .catch(error => console.log('Erreur IataApiRoutes : ' + error));
    }
}
