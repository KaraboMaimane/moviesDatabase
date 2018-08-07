import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { MoviesProvider } from '../../providers/movies/movies';

/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {
  moviesArr;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public moviesDb: MoviesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
  }

  searchByTitle(){
    const alert = this.alertCtrl.create({
      title: 'Enter Movie Name',
      subTitle: 'Please enter the movie title that you would like to search for',
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.searchMovieName(data.title);
          }
        }
      ]
    });
    alert.present();
  }

  searchMovieName(name) {
    this.moviesDb.getMoviesByName(name).then((data: any) => {
      this.moviesArr = data.Search;
      this.navCtrl.push(SearchPage, {moviesArr: this.moviesArr});
    });
  }
}
