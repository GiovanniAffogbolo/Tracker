import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import du modèle
import { IataApiRoutes } from '../../models/routes/iataapi-routes.model';

//import du service
import { IataApiService } from '../../services/iataapi.service';

@Component({
  selector: 'page-airportresult',
  templateUrl: 'airportresult.html'
})
export class AirportResultPage {

  answer: string;
  response: IataApiRoutes = new IataApiRoutes();

  constructor(public navCtrl: NavController, private navParams: NavParams,  private iataApiService: IataApiService) {
     this.answer = navParams.get('answer');
     this.iataApiService.getAirportS(this.answer)
    .then(fetched => {
      this.response = fetched;
      console.log(this.response);
    });
    }

}
