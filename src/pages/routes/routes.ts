import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ResultsPage } from '../results/results';
import { DepartPage } from '../depart/depart';

@Component({
  selector: 'page-routes',
  templateUrl: 'routes.html'
})
export class RoutesPage {

  destination: string;
  depart: string;

  constructor(public navCtrl: NavController) 
  {
    
  }

  showResults() {
    //aller à la page results
    this.navCtrl.push(ResultsPage, {
      destination: this.destination
  });
} 

showDepart() {
    //aller à la page results
    this.navCtrl.push(DepartPage, {
      depart: this.depart
  });
  } 

}
