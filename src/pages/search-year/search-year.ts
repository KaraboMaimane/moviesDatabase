import { Component, OnInit } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { MoviesProvider } from "../../providers/movies/movies";
import { WatchlistPage } from "../watchlist/watchlist";

/**
 * Generated class for the SearchYearPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-search-year",
  templateUrl: "search-year.html"
})
export class SearchYearPage implements OnInit {
  moviesArr;

  headingTitle;
  headingDescription;
  headingDate;
  headingUrl = "../../assets/imgs/noimage.jpg";
  headingRating;
  headingPlot: any;
  selected: number;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public moviesDb: MoviesProvider
  ) {}
  ngOnInit() {
    if (this.navParams.get != null) {
      this.moviesArr = this.navParams.get("moviesArr");
    }
  }

  selectMovie(i) {
    this.selected = i;
    this.headingTitle = this.moviesArr[i].title;
    this.headingDate = this.moviesArr[i].release_date;
    this.headingUrl = `http://image.tmdb.org/t/p/w185/${
      this.moviesArr[i].poster_path
    }`;

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

  back(){
    this.navCtrl.pop();
  }
}
