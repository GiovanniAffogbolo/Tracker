import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CountriesPage } from '../pages/countries/countries';
import { TimezonesPage } from '../pages/timezones/timezones';
import { RoutesPage } from '../pages/routes/routes';
import { ResultsPage } from '../pages/results/results';
import { DepartPage } from '../pages/depart/depart';
import { AirportsPage } from '../pages/airports/airports';
import { AirportResultPage } from '../pages/airportresult/airportresult';
import { AboutPage } from '../pages/about/about';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import du service
import { IataApiService } from '../services/iataapi.service';

//import http
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CountriesPage,
    TimezonesPage,
    RoutesPage,
    ResultsPage,
    AirportsPage,
    AboutPage,
    DepartPage,
    AirportResultPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CountriesPage,
    TimezonesPage,
    RoutesPage,
    ResultsPage,
    AirportsPage,
    AboutPage,
    DepartPage,
    AirportResultPage
  ],
  providers: [
    IataApiService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
