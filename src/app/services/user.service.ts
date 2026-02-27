import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface PersonalityTrait {
  left: string;
  right: string;
  value: number; // 0-100, 0=fully left, 100=fully right
}

export interface Persona {
  id: string;
  name: string;
  avatar: string;
  archetype: string;
  age: number;
  occupation: string;
  location: string;
  detail: string;
  bio: string;
  personality: PersonalityTrait[];
  links: string[];
  imageUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private personas: Persona[] = [
    {
      id: 'martin',
      name: 'Martin',
      avatar: 'M',
      archetype: 'The Explorer',
      age: 15,
      occupation: 'Highschooler',
      location: 'Zaragoza',
      detail: 'Plays football',
      bio: 'Martin is a 15 year old Highschooler and modern futbol player. Martin has a strict time table, but as a genuine young guy, he needs reminders, interactive and easy platform in order to not miss his public transportations.',
      personality: [
        { left: 'Introvert', right: 'Extrovert', value: 75 },
        { left: 'Analytical', right: 'Creative', value: 58 },
        { left: 'Busy', right: 'Time rich', value: 55 },
        { left: 'Messy', right: 'Organized', value: 40 },
        { left: 'Independent', right: 'Team player', value: 72 },
        { left: 'Passive', right: 'Active', value: 25 },
        { left: 'Safe', right: 'Risky', value: 65 },
      ],
      links: ['Instagram', 'TikTok', 'Spotify'],
      imageUrl: '',
    },
    {
      id: 'sara',
      name: 'Sara',
      avatar: 'S',
      archetype: 'The Protector',
      age: 27,
      occupation: 'Biohacking Engineer',
      location: 'Zaragoza',
      detail: 'Mother of a 4 year old kid',
      bio: 'Sara is a 27 year old bio hacking engineer working in the most famous longetivity clinique in Zaragoza. Sara is detail oriented and also a mother of Leo a 4 year old toddler. Sara needs Reliable, safe and children friendly public transportation as she only uses her Nuclear energized car for highway Road trips.',
      personality: [
        { left: 'Introvert', right: 'Extrovert', value: 15 },
        { left: 'Analytical', right: 'Creative', value: 18 },
        { left: 'Busy', right: 'Time rich', value: 22 },
        { left: 'Messy', right: 'Organized', value: 80 },
        { left: 'Independent', right: 'Team player', value: 60 },
        { left: 'Passive', right: 'Active', value: 72 },
        { left: 'Safe', right: 'Risky', value: 5 },
      ],
      links: ['INSTANOVA', '', 'Link 3'],
      imageUrl: '',
    },
  ];

  private currentPersona$ = new BehaviorSubject<Persona>(this.personas[0]);
  private isLoggedIn$ = new BehaviorSubject<boolean>(false);

  get persona$() {
    return this.currentPersona$.asObservable();
  }

  get loggedIn$() {
    return this.isLoggedIn$.asObservable();
  }

  get currentPersona(): Persona {
    return this.currentPersona$.value;
  }

  get isLoggedIn(): boolean {
    return this.isLoggedIn$.value;
  }

  getPersonas(): Persona[] {
    return this.personas;
  }

  login(personaId: string) {
    const persona = this.personas.find((p) => p.id === personaId);
    if (persona) {
      this.currentPersona$.next(persona);
      this.isLoggedIn$.next(true);
    }
  }

  logout() {
    this.isLoggedIn$.next(false);
  }

  switchPersona(personaId: string) {
    const persona = this.personas.find((p) => p.id === personaId);
    if (persona) {
      this.currentPersona$.next(persona);
    }
  }
}
