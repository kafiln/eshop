import { LoginService } from '../../services/login/login.service';
import { Component } from '@angular/core';
import { AppUser } from '../../models/AppUser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  appUser: AppUser;
  isCollapsed = true;


  constructor(private auth: LoginService) {
    auth.appUser$.subscribe((user: AppUser) => {
      this.appUser = user;
    });
  }

  logout() {
    this.auth.logOut();
  }

  toggleNavigation() {
    this.isCollapsed = !this.isCollapsed;
  }
}
