import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponentComponent } from '../../components/header/header-component/header-component.component';
import { MovieCategoryComponent } from '../../components/movie-category/movie-category/movie-category.component';
import { MovieService } from '../../services/movie.service';
import { HttpClientModule } from '@angular/common/http';
import {Movie} from '../../types/movies'
import { tmdbConfig } from '../../constants/config';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-browse-component',
  standalone: true,
  imports: [CommonModule, HeaderComponentComponent, MovieCategoryComponent],
  providers: [HttpClientModule],
  templateUrl: './browse-component.component.html',
  styleUrl: './browse-component.component.scss'
})

export class BrowseComponentComponent  {
  List:string[]=['New Releases','Trending','Top Rated','UpcomingMovies'];
  movieService = inject(MovieService);

  public domSanitise=inject(DomSanitizer);


  NewReleases:Movie[]=[];

  popularMovies:Movie[]=[];

  topRatedMovies:Movie[]=[];

  UpcomingMovies:Movie[]=[];

  tmdbConfig=tmdbConfig;
  banner!:Movie;

  

ngOnInit(): void {

    this.movieService.getPopularMovies().subscribe((result:any)=>{
      console.log(result);
      this.popularMovies = result.results;
      const randomNumber = Math.floor(Math.random() * 19); // Generates a random number between 0 and 19

    this.banner = this.popularMovies[randomNumber];
    })


    this.movieService.getTopRatedMovies().subscribe((result:any)=>{
      console.log('Top rated ')
      console.log(result);
      this.topRatedMovies=result.results
    })

    this.movieService.getUpcomingMovies().subscribe((result:any)=>{
      console.log(result);
      this.UpcomingMovies=result.results;
    })

    this.movieService.getNewReleases().subscribe((result:any)=>{
      console.log("New Releases")
      console.log(result);
      this.NewReleases=result.results;
    })

    this.movieService.getMovieVideos(this.banner.id).subscribe((result:any)=>{
      console.log("Videos")
      console.log(result);
      this.banner.videoKey=result.results.find((x:any)=>(x.site='Youtube')).key;
      console.log(this.banner)
    })


}
}
