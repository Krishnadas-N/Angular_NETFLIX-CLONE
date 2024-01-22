import { HttpClient, HttpHeaders } from "@angular/common/http";
import {  Injectable, inject } from "@angular/core";
import { tmdbConfig } from "../constants/config";
@Injectable({
    providedIn:'root'
})
export class MovieService{
     httpService=inject(HttpClient);

    getPopularMovies(){
        const headers = this.getHeaders();
        console.log(headers)
        return this.httpService.get('https://api.themoviedb.org/3/movie/popular', {
          headers: headers,
        });
    }
    getTopRatedMovies(){
      const headers=this.getHeaders();
      return this.httpService.get('https://api.themoviedb.org/3/movie/top_rated',{
        headers:headers
      })
    }
    getUpcomingMovies() {
      const headers = this.getHeaders();
      return this.httpService.get('https://api.themoviedb.org/3/movie/upcoming', {
        headers: headers,
      });
    }
    getNewReleases(){
      const headers = this.getHeaders();
    return this.httpService.get('https://api.themoviedb.org/3/tv/airing_today', {
      headers: headers,
    });
    }

    getMovieVideos(movieId: number) {
      const headers = this.getHeaders();
      return this.httpService.get(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        {
          headers: headers,
        }
      );
    }
    
    getHeaders() {
        let headers = new HttpHeaders();
        headers = headers.append('accept', 'application/json');
        headers = headers.append(
          'Authorization',
          'Bearer ' + tmdbConfig.accessToken
        );
        return headers;
      }

     
    
}