import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoviesProvider } from '../../providers/movies/movies';
/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage implements OnInit{
  moviesArr: any;

  headingTitle;
  headingDescription;
  headingDate;
  headingUrl = '../../assets/imgs/noimage.jpg';
  headingRating;
  headingPlot: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public moviesDb: MoviesProvider) {
  }

  ngOnInit() {
    if(this.navParams.get != null){
      this.moviesArr = this.navParams.get('moviesArr');
    }
  }

  searchMovieName(name) {
    this.moviesDb.getMoviesByName(name).then((data: any) => {
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
