import { IMovie } from '../models/movie';

export let movies: IMovie[] = [

    {
        Name:"Titanic",
        Actors:["Leonardo DiCaprio", "Kate Winslet"],
        Director:"James Cameron",
        PhotoUrl:"https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX182_CR0,0,182,268_AL_.jpg",
        Genres: ["Drama","Romance"],
        Price: 15,
        Rating: 7.8,
        Year: new Date(1997,8,2)
    },

    {
        Name:"The Wolf of Wall Street",
        Actors:["Leonardo DiCaprio", "Jonah Hill", "Margot Robbie"],
        Director:"Martin Scorsese",
        PhotoUrl:"https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_UX182_CR0,0,182,268_AL_.jpg",
        Genres: ["Drama","Crime","Biography"],
        Price: 18,
        Rating: 8.2,
        Year: new Date(2013,8,2)
    },

    {
        Name:"Piranha 3D",
        Actors:["Elisabeth Shue", "Jerry O'Connel"],
        Director:"Alexandre Aja",
        PhotoUrl:"https://m.media-amazon.com/images/M/MV5BMTU3NDg2NTY4Nl5BMl5BanBnXkFtZTcwMTM0OTE3Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
        Genres: ["Comedy","Fantasy","Horror"],
        Price: -2,
        Rating: 5.4,
        Year: new Date(2010,8,2)
    }


];
