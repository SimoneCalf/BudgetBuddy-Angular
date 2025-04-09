import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/dashboard/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { JanuaryComponent } from './components/january/january.component';
import { MonthoverwievComponent } from './components/monthoverwiev/monthoverwiev.component';
import { MainLayoutComponent } from './components/layout/main-layout/main-layout.component';

// const routes: Routes = [
//   { path: '', component: LoginComponent },  // ✅ Loginpagina als startpagina
//   { path: 'dashboard', component: DashboardComponent }, 
//   // ✅ Zorg dat deze route bestaat
//   { path: 'january', component: JanuaryComponent },
//   { path: '**', redirectTo: '', pathMatch: 'full' }, // ✅ Fallback naar login
//   {
//     path: '',
//     component: MainLayoutComponent,
//     children: [
//       { path: 'overzicht/:year/:month', component: MonthoverwievComponent }
//     ]
//   }
    
// ];


const routes: Routes = [
  { path: '', component: LoginComponent },  // ✅ Loginpagina als startpagina
  {
    path: '',  // Dit zorgt ervoor dat de MainLayoutComponent voor de rest van de routes werkt
    component: MainLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'overview/:year/:month', component: MonthoverwievComponent },
      // Voeg hier andere routes toe die gebruik maken van MainLayout
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }  // ✅ Fallback naar login als route niet gevonden wordt
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] // ✅ Exporteer RouterModule zodat de routes werken
})
export class AppRoutingModule { }
