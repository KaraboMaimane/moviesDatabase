import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { MoviesProvider } from '../../providers/movies/movies';
import { SearchYearPage } from '../search-year/search-year';
import { SearchGenrePage } from '../search-genre/search-genre';
import { WatchlistPage } from '../watchlist/watchlist';

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
  testRadioResult: any;
  testRadioOpen: boolean;
  moviesArr;
  title;
  year: number;
  date: Date = new Date;
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
            this.searchMovieName(data.title, SearchPage);
          }
        }
      ],
      cssClass: 'alertCustomCss'
      
    });
    alert.present();
  }

  searchMovieName(name, page) {
    this.moviesDb.getMoviesByName(name).then((data: any) => {
      this.moviesArr = data.Search;
      this.navCtrl.push(page, {moviesArr: this.moviesArr});
    });
  }

  searchByYear(){
    const alert = this.alertCtrl.create({
      title: 'Movie release year',
      subTitle: 'Enter the movie year you wanna enter',
      inputs: [
        {
          name: 'year',
          type: 'number',
          placeholder: 'Year'
        }
      ],
      buttons:[
        {
          text: 'Cancel' 
        },
        {
          text: 'Save',
          handler: (data) =>{
            if(data.year >= 1889){//according to the first movie created
              this.year = parseInt(data.year);
              this.searchMoviesByYear(data.year, SearchYearPage);
              console.log(data.results);
            }
          }
        }
      ],
      cssClass: 'alertCustomCss'
    });
    alert.present();
  }

  searchMoviesByYear(year, page){
    this.moviesDb.searchByYear(year).then((data:any) =>{
      this.moviesArr = data.results.splice(0, 10);
      this.navCtrl.push(page, {moviesArr: this.moviesArr});
    });
  }

  searchByGenre(){
    let alert = this.alertCtrl.create({
      cssClass: 'alertCustomCss'});
    alert.setTitle('Select Your Favourite Genre');

    alert.addInput({
      type: 'radio',
      label: 'Action',
      value: '28',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Animated',
      value: '16',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'Documentary',
      value: '99',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'Drama',
      value: '18',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'Fantasy',
      value: '14',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'Family',
      value: '10751',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'History',
      value: '36',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'Comedy',
      value: '35',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'War',
      value: '10752',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'Crime',
      value: '80',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'Music',
      value: '10402',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'Mystery',
      value: '9648',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'Romance',
      value: '10749',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'Sci Fi',
      value: '878',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'Horror',
      value: '27',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'Thrille',
      value: '53',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'Western',
      value: '37',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'Adventure',
      value: '12',
      checked: false
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.testRadioOpen = false;
        this.testRadioResult = data;
        console.log(this.testRadioResult);
        this.searchMoviesByGenre(SearchGenrePage, this.testRadioResult);
      }
    });
    alert.present();
  }

  searchMoviesByGenre(page, genre){
    this.moviesDb.searchByGenre(this.testRadioResult).then((data: any) => {
      this.moviesArr = data.results.splice(0, 10);
      this.navCtrl.push(page, {moviesArr: this.moviesArr});
      console.log(this.moviesArr);
    })
  }

  toWatchList(){
    this.navCtrl.push(WatchlistPage);
  }
}
