import { Component, Input } from '@angular/core';
import { tmdbConfig } from '../../../constants/config';
import {Movie} from '../../../types/movies';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-card-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-card-component.component.html',
  styleUrl: './movie-card-component.component.scss'
})
export class MovieCardComponentComponent {
@Input() movie!:Movie;
tmdbConfig=tmdbConfig;
}
