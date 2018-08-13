import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoviesProvider } from '../../providers/movies/movies';
import { WatchlistPage } from '../watchlist/watchlist';
import { MovieInfoPage } from '../movie-info/movie-info';

/**
 * Generated class for the SearchGenrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-genre',
  templateUrl: 'search-genre.html',
})
export class SearchGenrePage implements OnInit{
  moviesArr;

  headingTitle = 'No Title Selected';
  headingDescription = 'No Description Available';
  headingDate = 'No Date Selected';
  headingUrl = '../../assets/imgs/noimage.jpg';
  headingRating = 'Not Rated';
  headingPlot: any;

  selected: number;
  background: any;
  movieId: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public moviesDb: MoviesProvider) {
  }

  ngOnInit(){
    if(this.navParams.get != null){
      this.moviesArr = this.navParams.get('moviesArr');
    }
  }

  selectMovie(i){
    this.selected = i;
    this.headingTitle = this.moviesArr[i].title;
    this.headingDate = this.moviesArr[i].release_date;
    this.headingUrl = `http://image.tmdb.org/t/p/original/${this.moviesArr[i].poster_path}`;
    this.movieId = this.moviesArr[i].id;
    this.background = this.moviesArr[i].backdrop_path;

    this.moviesDb.searchByTitle(this.moviesArr[i].title).then((data: any) => {
      this.headingRating = data.imdbRating;
      this.headingPlot = data.Plot;
    });
  }

  addToWatchList(){
    if(this.selected != undefined){
      this.moviesDb.searchByTitle(this.moviesArr[this.selected].title).then((data: any) =>{
        this.moviesDb.addToWatch(data); 
        this.moviesDb.showList();
      });
    }
  }

  toWatchList(){
    this.navCtrl.push(WatchlistPage);
  }

  toInfoPage(){
    this.navCtrl.push(MovieInfoPage, {
      movie: this.moviesArr[this.selected], 
      background: this.background, 
      id: this.movieId
    });
  }

  back(){
    this.navCtrl.pop();
  }
}
