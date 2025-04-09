import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/dashboard/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { JanuaryComponent } from './components/january/january.component';
import { MonthoverwievComponent } from './components/monthoverwiev/monthoverwiev.component';

const routes: Routes = [
  { path: '', component: LoginComponent },  // ✅ Loginpagina als startpagina
  { path: 'dashboard', component: DashboardComponent }, 
  // ✅ Zorg dat deze route bestaat
  { path: 'january', component: JanuaryComponent },
  { path: 'overview/:year/:month', component: MonthoverwievComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // ✅ Fallback naar login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] // ✅ Exporteer RouterModule zodat de routes werken
})
export class AppRoutingModule { }
