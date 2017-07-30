import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//import du modèle
import { IataApiTimezones } from '../../models/iataapi-timezones.model';

//import du service
import { IataApiService } from '../../services/iataapi.service';


@Component({
  selector: 'page-timezones',
  templateUrl: 'timezones.html'
})
export class TimezonesPage {

  response: IataApiTimezones = new IataApiTimezones();

  constructor(public navCtrl: NavController, private iataApiService: IataApiService) 
  {
    
    this.iataApiService.getTimezones()
    .then(fetched => {
      this.response = fetched;
      console.log(this.response);
    });

  }

}
