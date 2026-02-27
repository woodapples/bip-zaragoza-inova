import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserService, Persona } from '../../services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-settings',
  imports: [CommonModule],
  templateUrl: './user-settings.component.html',
  styleUrl: './user-settings.component.scss',
})
export class UserSettingsComponent implements OnInit, OnDestroy {
  persona: Persona | null = null;
  private sub!: Subscription;

  constructor(
    private userService: UserService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.sub = this.userService.persona$.subscribe((p) => (this.persona = p));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  switchPersona() {
    const personas = this.userService.getPersonas();
    const other = personas.find((p) => p.id !== this.persona?.id);
    if (other) {
      this.userService.switchPersona(other.id);
    }
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
