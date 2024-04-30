import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @ViewChild('nav', { static: false }) nav!: ElementRef;

  constructor(private renderer: Renderer2) {}

  onToggleNavbar() {
    if ((this.nav.nativeElement as HTMLElement).classList.contains('active')) {
      this.renderer.removeClass(this.nav.nativeElement, 'active');
    } else {
      this.renderer.addClass(this.nav.nativeElement, 'active');
    }
  }
}
