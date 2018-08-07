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
    let url = 'http://www.omdbapi.com/?s='+ title +'&plot=full&apikey=77770a81';
    
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
    let url = 'http://www.omdbapi.com/?s='+ title +'&plot=full&apikey=77770a81';
    
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
