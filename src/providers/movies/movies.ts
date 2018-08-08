import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the MoviesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoviesProvider {
  
  constructor(public http: HttpClient) {
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
    let url = 'https://api.themoviedb.org/3/discover/movie?api_key=ee83512c0fd8ba5bceb5752c17820bf4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2010'
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

  
}
