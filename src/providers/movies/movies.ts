import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the MoviesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoviesProvider {
  watchList = [];
  constructor(public http: HttpClient, public toastCtrl: ToastController) {
  }

  getMoviesByName(title) {
    let url = 'http://www.omdbapi.com/?s='+ title +'&type=movie&apikey=77770a81';
    
    return new Promise(resolve => {
      this.http.get(url).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

    getTvShowByName(title) {
    let url = 'http://www.omdbapi.com/?s='+ title +'&type=series&apikey=77770a81';
    
    return new Promise(resolve => {
      this.http.get(url).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

  searchByTitle(title){
    let url = 'http://www.omdbapi.com/?t='+ title +'&plot=full&apikey=77770a81';
    
    return new Promise(resolve => {
      this.http.get(url).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

  searchByYear(year){
    let url = 'https://api.themoviedb.org/3/discover/movie?api_key=ee83512c0fd8ba5bceb5752c17820bf4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year='+year;
    // let url = 'http://www.omdbapi.com/?y='+ year +'&apikey=77770a81';
    
    return new Promise(resolve => {
      this.http.get(url).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

  searchByGenre(genre){
    let url = 'https://api.themoviedb.org/3/discover/movie?api_key=ee83512c0fd8ba5bceb5752c17820bf4&language=en-US&sort_by=popularity.desc&with_genres='+ genre;

    return new Promise(resolve => {
      this.http.get(url).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

  addToWatch(items){
    this.watchList.push(items);
    const toast = this.toastCtrl.create({
      message: items.Title + ' Successfully Added To WatchList',
      duration: 2000
    });
    toast.present();
  }

  showList(){
    return this.watchList;
  }
}
