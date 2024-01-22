import { Component, Input,OnInit } from '@angular/core';
import { MovieCardComponentComponent } from '../../movie-card/movie-card-component/movie-card-component.component';
import {Movie} from '../../../types/movies'
@Component({
  selector: 'app-movie-category',
  standalone: true,
  imports: [MovieCardComponentComponent],
  templateUrl: './movie-category.component.html',
  styleUrl: './movie-category.component.scss'
})
export class MovieCategoryComponent {
  @Input() title=''
  @Input() movieList:Movie[]=[]
  ngOnit():void{
    console.log('/////////')
    console.log(this.movieList)
  }
}
