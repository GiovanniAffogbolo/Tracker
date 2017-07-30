import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
//import { ModalController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  showGio() {
    let alert = this.alertCtrl.create({
      title: 'Details',
      subTitle: 'Name : AFFOGBOLO<br>Surname : Giovanni<br>Email : affogbologiovanni@gmail.com<br>GitHub : GiovanniAffogbolo',
      buttons: ['Close']
    });
    alert.present();
  }

}
