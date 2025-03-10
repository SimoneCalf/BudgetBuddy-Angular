import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  isSubmitted = false;
  loginFailed = false;

  constructor(
    private fb: FormBuilder, 
    //private authService: AuthService,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  get formControls() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) return;

    this.http.post<any>('http://127.0.0.1:5000/login', this.loginForm.value)
      .subscribe({
        next: (response) => {
          console.log(response?.message || 'Geen bericht ontvangen');
          this.router.navigate(['/dashboard']); // 🔥 Stuur naar dashboard bij succes
        },
        error: () => {
          this.loginFailed = true; // ❌ Toon foutmelding
        }
      });
  }
}