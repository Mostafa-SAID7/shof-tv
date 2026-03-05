import { Component, signal, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CookieCategory {
  key: string;
  title: string;
  description: string;
  icon: string;
  alwaysActive: boolean;
  enabled: boolean;
}

@Component({
  selector: 'app-cookie-preferences',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Backdrop -->
    <div class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" (click)="close.emit()">
      <!-- Modal -->
      <div
        class="w-full max-w-xl bg-card border border-border rounded-2xl overflow-hidden animate-scale-in"
        (click)="$event.stopPropagation()"
      >
        <!-- Header -->
        <div class="flex items-center justify-between px-8 pt-8 pb-2">
          <h2 class="text-2xl font-bold text-primary">Cookie Preferences</h2>
          <button
            (click)="close.emit()"
            class="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Description -->
        <div class="px-8 pb-6">
          <p class="text-sm text-muted-foreground leading-relaxed">
            We use cookies and similar technologies to help personalize content, tailor and measure
            ads, and provide a better experience. By clicking accept, you agree to this, as outlined
            in our Cookie Policy.
          </p>
        </div>

        <!-- Cookie Categories -->
        <div class="px-8 pb-6 flex flex-col gap-3">
          @for (cat of categories; track cat.key) {
            <div class="flex items-start gap-4 p-5 rounded-xl border border-border bg-background/50">
              <div class="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" [attr.d]="cat.icon"/>
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <h3 class="text-sm font-semibold text-foreground">{{ cat.title }}</h3>
                <p class="text-xs text-muted-foreground mt-1 leading-relaxed">{{ cat.description }}</p>
              </div>
              <div class="shrink-0 flex items-center">
                @if (cat.alwaysActive) {
                  <div class="flex items-center gap-2">
                    <div class="w-12 h-6 rounded-full bg-primary/80 relative">
                      <div class="absolute right-0.5 top-0.5 w-5 h-5 rounded-full bg-primary-foreground shadow flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                        </svg>
                      </div>
                    </div>
                    <span class="text-xs text-primary font-medium">Always Active</span>
                  </div>
                } @else {
                  <button
                    (click)="toggleCategory(cat.key)"
                    class="w-12 h-6 rounded-full relative transition-colors duration-200"
                    [class.bg-primary]="cat.enabled"
                    [class.bg-muted]="!cat.enabled"
                    [attr.aria-label]="'Toggle ' + cat.title"
                    role="switch"
                    [attr.aria-checked]="cat.enabled"
                  >
                    <div
                      class="absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200"
                      [class.translate-x-6]="cat.enabled"
                      [class.translate-x-0.5]="!cat.enabled"
                    ></div>
                  </button>
                }
              </div>
            </div>
          }
        </div>

        <!-- Actions -->
        <div class="px-8 pb-8 flex items-center justify-center gap-4">
          <button
            (click)="savePreferences.emit(categories)"
            class="text-sm font-medium border border-border text-foreground px-8 py-3 rounded-lg hover:border-border-highlight transition-colors"
          >
            Save Preferences
          </button>
          <button
            (click)="acceptAll.emit()"
            class="text-sm font-semibold bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:brightness-110 transition-all"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  `,
})
export class CookiePreferencesComponent {
  @Output() close = new EventEmitter<void>();
  @Output() savePreferences = new EventEmitter<CookieCategory[]>();
  @Output() acceptAll = new EventEmitter<void>();

  categories: CookieCategory[] = [
    {
      key: 'necessary',
      title: 'Strictly Necessary',
      description: 'These cookies are essential for the website to function properly and cannot be switched off.',
      icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
      alwaysActive: true,
      enabled: true,
    },
    {
      key: 'functional',
      title: 'Functional',
      description: 'These cookies enable the website to provide enhanced functionality and personalization.',
      icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
      alwaysActive: false,
      enabled: false,
    },
    {
      key: 'performance',
      title: 'Performance',
      description: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      alwaysActive: false,
      enabled: true,
    },
    {
      key: 'targeting',
      title: 'Targeting',
      description: 'These cookies may be set through our site by our advertising partners to build a profile of your interests.',
      icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
      alwaysActive: false,
      enabled: false,
    },
  ];

  toggleCategory(key: string) {
    this.categories = this.categories.map(cat =>
      cat.key === key ? { ...cat, enabled: !cat.enabled } : cat
    );
  }
}
