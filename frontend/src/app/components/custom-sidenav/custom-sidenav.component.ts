import { Component, signal } from '@angular/core';

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
