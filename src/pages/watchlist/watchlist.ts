import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoviesProvider } from '../../providers/movies/movies';
import { CategoriesPage } from '../categories/categories';

/**
 * Generated class for the WatchlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-watchlist',
  templateUrl: 'watchlist.html',
})
export class WatchlistPage implements OnInit{
  moviesArr: any[];

  headingTitle = 'No Title Selected';
  headingDescription = 'No Description Available';
  headingDate = 'No Date Selected';
  headingUrl = '../../assets/imgs/noimage.jpg';
  headingRating = 'Not Rated';
  headingPlot = 'No Plot Available';

  constructor(public navCtrl: NavController, public navParams: NavParams, public moviesDb: MoviesProvider) {
  }

  ngOnInit(){
    this.moviesArr = this.moviesDb.showList();
    console.log(this.moviesArr);
  }

  selectMovie(i) {
    this.headingTitle = this.moviesArr[i].Title;
    this.headingDate = this.moviesArr[i].Release;
    this.headingUrl = this.moviesArr[i].Poster;

    this.moviesDb.searchByTitle(this.moviesArr[i].Title).then((data: any) => {
      this.headingRating = data.imdbRating;
      this.headingPlot = data.Plot;
    });
  }

  back(){
    this.navCtrl.pop();
  }
}
