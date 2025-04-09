import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';

export type MenuItem = {
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-custom-sidenav',
  standalone: false,
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.scss'
})
export class CustomSidenavComponent {

  constructor(private router: Router) {}


  years: number[] = [2023, 2024, 2025];
  months: string[] = [
    'Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni',
    'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'
  ];

  openYear: number | null = null;
  selectedMonth: { year: number | null, month: string | null } = { year: null, month: null };

  toggleYear(year: number): void {
    this.openYear = this.openYear === year ? null : year;
    console.log('Open jaar:', this.openYear);
  }

  selectMonth(year: number, month: string): void {
    console.log('Selecteer maand:', year, month);
    this.selectedMonth = { year, month };
    this.router.navigate(['/overview', year, month.toLowerCase()]);
    console.log('Navigeren naar:', year, month.toLowerCase());
    console.log('Geselecteerd:', this.selectedMonth);
    // Je kunt hier ook een event emitter gebruiken als je de selectie naar een ouder component wilt doorgeven
  }

  isSelected(year: number, month: string): boolean {
    return this.selectedMonth.year === year && this.selectedMonth.month === month;
  }


  menuItems = signal<MenuItem[]>([
    { icon: 'calendar_month', label: 'January', route: '/January' },
    { icon: 'calendar_month', label: 'February', route: '/February' },
    { icon: 'calendar_month', label: 'March', route: '/March' },
    { icon: 'calendar_month', label: 'April', route: '/April' },
    { icon: 'calendar_month', label: 'May', route: '/May' },
    { icon: 'calendar_month', label: 'June', route: '/June' },
    { icon: 'calendar_month', label: 'July', route: '/July' },
    { icon: 'calendar_month', label: 'August', route: '/August' },
    { icon: 'calendar_month', label: 'September', route: '/September' },
    { icon: 'calendar_month', label: 'October', route: '/October' },
    { icon: 'calendar_month', label: 'November', route: '/November' },
    { icon: 'calendar_month', label: 'December', route: '/December' }
  ]);

}
