import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import du modèle
import { IataApiRoutes } from '../../models/routes/iataapi-routes.model';

//import du service
import { IataApiService } from '../../services/iataapi.service';

@Component({
  selector: 'page-depart',
  templateUrl: 'depart.html'
})
export class DepartPage {

  depart: string;
  response: IataApiRoutes = new IataApiRoutes();

  constructor(public navCtrl: NavController, private navParams: NavParams,  private iataApiService: IataApiService) {
     this.depart = navParams.get('depart');
     this.iataApiService.getRoutesDepart(this.depart)
    .then(fetched => {
      this.response = fetched;
      console.log(this.response);
    });
  }

}
