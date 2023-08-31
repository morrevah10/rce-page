import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent  {

  @Input() public title = '';

  isMobileView = false;
  isMobileMenuOpen = false;

  constructor() {
    this.checkViewport();
    window.addEventListener('resize', this.checkViewport);
  }
  checkViewport = () => {
    this.isMobileView = window.innerWidth <= 768; // Adjust the breakpoint as needed
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
