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

  HideImage: boolean = true;


  ToggleImage() {
    this.HideImage =!this.HideImage;
    
  }
}
