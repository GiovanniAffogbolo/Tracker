import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//import du modèle
import { IataApiAirports } from '../../models/airports/iataapi-airports.model';

//import du service
import { IataApiService } from '../../services/iataapi.service';

import { AirportResultPage } from '../airportresult/airportresult';

@Component({
  selector: 'page-airports',
  templateUrl: 'airports.html'
})
export class AirportsPage {

  answer: string;
  response: IataApiAirports = new IataApiAirports();

  constructor(public navCtrl: NavController, private iataApiService: IataApiService) 
  {
    
    this.iataApiService.getAirports()
    .then(fetched => {
      this.response = fetched;
      console.log(this.response);
    });

  }

  showAirport() {
    //aller à la page airportresults
    this.navCtrl.push(AirportResultPage, {
      answer: this.answer
  });
} 

}
