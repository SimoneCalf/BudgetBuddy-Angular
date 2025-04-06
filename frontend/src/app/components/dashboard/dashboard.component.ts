import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.checkSession();
  }

  checkSession() {
    this.http.get<any>('http://127.0.0.1:5000/is_logged_in', { withCredentials: true })
      .subscribe({
        next: (response) => {
          if (!response.logged_in) {
            console.log('Geen actieve sessie gevonden. Doorsturen naar loginpagina.');
            this.router.navigate(['/login']); // Stuur naar loginpagina als niet ingelogd
          } else {
            console.log(`Welkom terug, ${response.username}!`);
          }
        },
        error: (err) => {
          console.error('Fout bij het controleren van de sessie:', err);
          this.router.navigate(['/login']); // Stuur naar loginpagina bij fout
        }
      });
  }
}