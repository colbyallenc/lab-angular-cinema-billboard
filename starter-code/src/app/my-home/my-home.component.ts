import { Component, OnInit } from '@angular/core';

import { CinemaMovies } from '../cinema.service';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css'],
  providers: [CinemaMovies]
  //decalring dependency here
})
export class MyHomeComponent implements OnInit {
  movies: Array<Object> = []


  constructor(public cinema: CinemaMovies) { }
  //giving the class the ability to use CinemaMovies

  ngOnInit() {
    this.movies = this.cinema.getMovies();
    //put in NGOnInit so it updates when changes are made
  }

}
