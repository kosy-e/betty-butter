import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  heroBackgroundImage = 'assets/images/gallery-image-4.png';
  overlayColor = 'rgba(0, 0, 0, 0.5)';
  title = 'Make Your Face Sparkle';
  servicesLink = '/services';
  isDark = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDarkMode() {
    this.isDark = !this.isDark;
  }

}
