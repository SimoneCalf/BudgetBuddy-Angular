import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: LoginComponent },  // ✅ Loginpagina als startpagina
  { path: 'dashboard', component: DashboardComponent }, // ✅ Zorg dat deze route bestaat
  { path: '**', redirectTo: '', pathMatch: 'full' } // ✅ Fallback naar login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] // ✅ Exporteer RouterModule zodat de routes werken
})
export class AppRoutingModule { }
