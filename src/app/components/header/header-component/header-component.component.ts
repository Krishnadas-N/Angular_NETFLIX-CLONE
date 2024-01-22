import { Component } from '@angular/core';
import { LOGO_URI } from '../../../constants/config';
@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [],
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.scss'
})
export class HeaderComponentComponent {
  logoUrl:string=LOGO_URI;
}
