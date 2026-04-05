import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CookiePreferencesComponent } from './shared/cookie-preferences/cookie-preferences.component';
import { LiveChatComponent } from './shared/live-chat/live-chat.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    CookiePreferencesComponent,
    LiveChatComponent,
  ],
  template: `
    <app-navbar />
    <main class="min-h-screen">
      <router-outlet />
    </main>
    <app-footer />
    <app-cookie-preferences />
    <app-live-chat />
  `,
  styles: [],
})
export class AppComponent {
  title = 'ShofTV - The Future of Cinema';
}
