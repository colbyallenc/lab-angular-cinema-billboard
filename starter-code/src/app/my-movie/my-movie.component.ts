import { Component, OnInit } from '@angular/core';
import { CinemaMovies } from '../cinema.service'
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css'],
  //providers:[CinemaService]
})
export class MyMovieComponent implements OnInit {

movieId: number;
movie: Object;

 constructor(private cinema: CinemaMovies, private route: ActivatedRoute, private router:Router) { }

 ngOnInit() {
    this.route.params.subscribe((params)=> this.movieId = Number(params['id']));
    this.movie = this.cinema.getMovie(this.movieId)
  }

}
