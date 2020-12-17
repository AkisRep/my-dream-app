export interface IMovie {
  Name: string;
  PhotoUrl: string;
  Year: Date;
  Director: string;
  Actors: Array<string>;
  Genres: Array<string>;
  Rating: number;
  Price: number;
}
