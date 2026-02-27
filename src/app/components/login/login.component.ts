import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserService, Persona } from '../../services/user.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  personas: Persona[];
  selectedPersona: Persona | null = null;

  constructor(
    private userService: UserService,
    private router: Router,
  ) {
    this.personas = this.userService.getPersonas();
  }

  selectPersona(persona: Persona) {
    this.selectedPersona = persona;
  }

  login() {
    if (this.selectedPersona) {
      this.userService.login(this.selectedPersona.id);
      this.router.navigate(['/dashboard']);
    }
  }
}
