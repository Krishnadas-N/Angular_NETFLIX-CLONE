import { Component,HostListener,ElementRef, Renderer2, OnInit } from '@angular/core';
import { LOGO_URI } from '../../../constants/config';
@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [],
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.scss'
})
export class HeaderComponentComponent implements OnInit{
  isScrolled:boolean=false;
  logoUrl:string=LOGO_URI;
  isInputToggled: boolean = false;
  ngOnInit(): void {
      
  }
  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // Set isScrolled to true if the scroll position is greater than a certain value (adjust as needed)
    this.isScrolled = scrollPosition > 50;
    }
    constructor(private renderer: Renderer2, private el: ElementRef) { }

    toggleInput(event: Event): void {
      // Check if the clicked element is the image with the 'img' class
      if ((event.target as HTMLElement).classList.contains('img')) {
        this.isInputToggled = !this.isInputToggled;
      } else {
        // If the click is outside the search div, hide the input
        const isInsideSearch = this.el.nativeElement.contains(event.target);
        if (!isInsideSearch) {
          this.isInputToggled = false;
        }
      }
    }
}
