import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchGenrePage } from './search-genre';

@NgModule({
  declarations: [
    SearchGenrePage,
  ],
  imports: [
    IonicPageModule.forChild(SearchGenrePage),
  ],
})
export class SearchGenrePageModule {}
