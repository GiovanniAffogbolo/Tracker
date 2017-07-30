import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import du modèle
import { IataApiRoutes } from '../../models/routes/iataapi-routes.model';

//import du service
import { IataApiService } from '../../services/iataapi.service';

@Component({
  selector: 'page-results',
  templateUrl: 'results.html'
})
export class ResultsPage {

  destination: string;
  response: IataApiRoutes = new IataApiRoutes();
  
  constructor(public navCtrl: NavController, private navParams: NavParams,  private iataApiService: IataApiService) {
     this.destination = navParams.get('destination');
     this.iataApiService.getRoutes(this.destination)
    .then(fetched => {
      this.response = fetched;
      console.log(this.response);
    });
  }

}
