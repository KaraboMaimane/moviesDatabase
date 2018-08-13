import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MoviesProvider } from '../../providers/movies/movies';
import { CategoriesPage } from '../categories/categories';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  moviesArr;

  constructor(public navCtrl: NavController, public moviesDb: MoviesProvider) {
  }

  nextPage(){
    this.navCtrl.push(CategoriesPage);
  }

}


