import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoviesProvider } from '../../providers/movies/movies';

/**
 * Generated class for the SearchYearPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-year',
  templateUrl: 'search-year.html',
})
export class SearchYearPage {
  moviesArr: any;

  headingTitle;
  headingDescription;
  headingDate;
  headingUrl = '../../assets/imgs/noimage.jpg';
  headingRating;
  headingPlot: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public moviesDb: MoviesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchYearPage');
  }

  searchMovieYear(year) {
    this.moviesDb.searchByYear(year).then((data: any) => {
      this.moviesArr = data.Search;
    });
  }

  back(){
    this.navCtrl.pop();
  }

  selectMovie(i){
    this.headingTitle = this.moviesArr[i].Title;
    this.headingDate = this.moviesArr[i].Year;
    this.headingUrl = this.moviesArr[i].Poster;

    this.moviesDb.searchByTitle(this.moviesArr[i].Title).then((data: any) => {
      this.headingRating = data.imdbRating;
      this.headingPlot = data.Plot;
    });
  }
}
