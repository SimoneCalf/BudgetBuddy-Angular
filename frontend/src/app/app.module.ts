import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/dashboard/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CustomSidenavComponent } from './components/custom-sidenav/custom-sidenav.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CustomSidenavComponent,
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule
    // RouterModule.forRoot(routes, { useHash: true }) // 🔹 Enables hash-based routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }