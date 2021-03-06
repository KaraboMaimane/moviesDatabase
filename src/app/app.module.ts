import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MoviesProvider } from '../providers/movies/movies';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { CategoriesPage } from '../pages/categories/categories';
import { SearchPage } from '../pages/search/search';
import { SearchYearPage } from '../pages/search-year/search-year';
import { SearchGenrePage } from '../pages/search-genre/search-genre';
import { WatchlistPage } from '../pages/watchlist/watchlist';
import { MovieInfoPage } from '../pages/movie-info/movie-info';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CategoriesPage,
    SearchPage,
    SearchYearPage,
    SearchGenrePage,
    WatchlistPage,
    MovieInfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CategoriesPage,
    SearchPage,
    SearchYearPage,
    SearchGenrePage,
    WatchlistPage,
    MovieInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MoviesProvider
  ]
})
export class AppModule {}
