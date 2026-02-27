import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, TopbarComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'inovapp';
  showShell = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const url = event.urlAfterRedirects || event.url;
        this.showShell = !['/login', '/'].includes(url) && url !== '';
      });
  }
}
