import { Injectable } from '@angular/core';
import usersData from '../assets/users.json'; // ✅ Direct JSON importeren

// ✅ Definieer een interface voor gebruikers
interface User {
  username: string;
  password: string;
}

// ✅ TypeScript herkent nu de JSON als een object met een `users` array
interface UsersJson {
  users: User[];
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[] = (usersData as UsersJson).users; // ✅ TypeScript correct maken

  constructor() {}

  login(username: string, password: string): boolean {
    return this.users.some(user => user.username === username && user.password === password);
  }
}
