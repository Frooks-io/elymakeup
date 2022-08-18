import { Component} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  openMenu = false;

  showMenu() {
    return this.openMenu ? 'transition duration-450 ease-out' : 'opacity-0';
  }

  showMenuMobile() {
    return this.openMenu ? '' : 'hidden';
  }

  clickedMenu(){
    this.openMenu = !this.openMenu;
  }
}
