import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoviesProvider } from '../../providers/movies/movies';

/**
 * Generated class for the MovieInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie-info',
  templateUrl: 'movie-info.html',
})
export class MovieInfoPage implements OnInit {
  movie: any;
  metadata;
  background: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: MoviesProvider) {
  }

  ngOnInit(){
    this.movie = this.navParams.get('movie');
    console.log(this.navParams.get('movie'));
    this.background = `https://image.tmdb.org/t/p/original${this.navParams.get('background')}`;
    this.database.searchByTitle(this.movie.title).then((data: any)=>{
      this.metadata = data;
    });
    console.log(this.metadata)
  }

}
