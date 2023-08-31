import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-phone-toolbar',
  templateUrl: './phone-toolbar.component.html',
  styleUrls: ['./phone-toolbar.component.scss']
})
export class PhoneToolbarComponent {
  opened=false;

  isComputerScreen = true;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  toggleMenu() {
    this.opened = !this.opened;
  }

  checkScreenSize() {
    this.isComputerScreen = window.innerWidth > 520; 
  }
}


