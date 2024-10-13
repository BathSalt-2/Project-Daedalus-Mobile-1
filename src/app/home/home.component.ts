import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private routerExtensions: RouterExtensions,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  onChatTap() {
    this.routerExtensions.navigate(['/chat']);
  }

  onProjectsTap() {
    this.routerExtensions.navigate(['/projects']);
  }

  onLogout() {
    this.authService.signOut().then(() => {
      // Handle successful logout
    }).catch(error => {
      console.error('Logout error:', error);
    });
  }
}