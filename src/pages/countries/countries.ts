import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//import du modèle
import { IataApiCountries } from '../../models/iataapi-countries.model';

//import du service
import { IataApiService } from '../../services/iataapi.service';


@Component({
  selector: 'page-countries',
  templateUrl: 'countries.html'
})
export class CountriesPage {

  response: IataApiCountries = new IataApiCountries();

  constructor(public navCtrl: NavController, private iataApiService: IataApiService) {
    
    this.iataApiService.getCountries()
    .then(fetched => {
      this.response = fetched;
      console.log(this.response);
    });

  }

}
