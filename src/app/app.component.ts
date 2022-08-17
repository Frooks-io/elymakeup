import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
