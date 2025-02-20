import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

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
    private authService: AuthService,
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
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      console.log('Attempting login with:', username, password);

      if (this.authService.login(username, password)) {
        console.log('✅ Login successful');
        this.loginFailed = false;
        setTimeout(() => {
          this.router.navigate(['dashboard']);
        }, 100);
      } else {
        console.log('❌ Login failed');
        this.loginFailed = true;
      }
    }
  }
}