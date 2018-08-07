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
}
