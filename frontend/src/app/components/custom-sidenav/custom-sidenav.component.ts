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
    { icon: 'home', label: 'Home', route: '/home' },
    { icon: 'settings', label: 'Settings', route: '/settings' },
    { icon: 'info', label: 'About', route: '/about' },
    { icon: 'contact_mail', label: 'Contact', route: '/contact' },
    { icon: 'help', label: 'Help', route: '/help' },
  ]);

}
