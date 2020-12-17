import { Component } from '@angular/core';
import { movies } from '../../mockupData/MovieEntries';
import { IMovie } from '../../models/movie';

@Component({
  selector: 'movie-app',
  templateUrl: './movie.component.html',
})
export class MovieComponent {
  borderRadius: number = 7;
  Movies: IMovie[] = movies;

  SearchText: string = '';

  HideImage: boolean = true;

  // constructor (SearchText:string){
  //   this.SearchText = SearchText;
  // }

  FilterTable() {
    // if (this.SearchText == '') {
    //   this.Movies = movies;
    // } else {
    //   this.Movies = movies.filter((m) => m.Name.includes(this.SearchText));
    // }
    this.Movies = this.SearchText == "" ? movies : movies.filter((m) => m.Name.includes(this.SearchText));
  }
   

  ToggleImage() {
    this.HideImage = !this.HideImage;
  }
}
