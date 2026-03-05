import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Announcement Banner -->
    @if (showBanner() && banner) {
      <div class="bg-primary/10 border-b border-primary/20 py-2 px-4 text-center text-sm relative">
        <span class="font-bold text-foreground">{{ banner.bold }}</span>
        <span class="text-secondary-foreground ml-1">{{ banner.text }}</span>
        @if (banner.link) {
          <a href="#" class="ml-2 inline-flex items-center gap-1 text-xs font-semibold text-foreground border border-foreground/30 rounded-full px-3 py-0.5 hover:bg-foreground/10 transition-colors">
            {{ banner.link }}
          </a>
        }
        <button
          (click)="showBanner.set(false)"
          class="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close banner"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    }

    <!-- Main Navbar -->
    <nav class="flex items-center justify-between px-6 lg:px-12 py-4">
      <!-- Logo -->
      <a routerLink="/" class="flex items-center gap-0 text-2xl font-black tracking-tight">
        <span class="text-primary">SHOF</span><span class="text-foreground">TV</span>
      </a>

      <!-- Center Nav Links (Desktop) -->
      @if (navStyle === 'pill') {
        <div class="hidden md:flex items-center bg-secondary/60 border border-border rounded-full px-1 py-1">
          @for (link of centerLinks; track link.label) {
            <a
              [routerLink]="link.route"
              class="px-5 py-2 text-sm font-medium rounded-full transition-colors"
              [class.text-primary]="link.active"
              [class.text-secondary-foreground]="!link.active"
              [class.hover:text-foreground]="!link.active"
            >
              {{ link.label }}
            </a>
          }
        </div>
      } @else {
        <div class="hidden md:flex items-center gap-8">
          @for (link of centerLinks; track link.label) {
            <a
              [routerLink]="link.route"
              class="text-sm font-medium transition-colors"
              [class.text-primary]="link.active"
              [class.text-secondary-foreground]="!link.active"
              [class.hover:text-foreground]="!link.active"
            >
              {{ link.label }}
            </a>
          }
        </div>
      }

      <!-- Right Side -->
      <div class="hidden md:flex items-center gap-3">
        @for (action of rightActions; track action.label) {
          @if (action.style === 'text') {
            <a [routerLink]="action.route" class="text-sm font-medium text-secondary-foreground hover:text-foreground transition-colors">
              {{ action.label }}
            </a>
          }
          @if (action.style === 'outline') {
            <a
              [routerLink]="action.route"
              class="text-sm font-medium border border-foreground/20 text-foreground px-5 py-2 rounded-full hover:bg-foreground/5 transition-all"
            >
              {{ action.label }}
            </a>
          }
          @if (action.style === 'primary') {
            <a
              [routerLink]="action.route"
              class="text-sm font-semibold bg-primary text-primary-foreground px-5 py-2 rounded-full hover:brightness-110 transition-all"
            >
              {{ action.label }}
            </a>
          }
          @if (action.style === 'icon') {
            <button class="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-border-highlight transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
            </button>
          }
        }
      </div>

      <!-- Mobile Menu Toggle -->
      <button
        (click)="mobileOpen.set(!mobileOpen())"
        class="md:hidden w-10 h-10 flex items-center justify-center text-foreground"
        aria-label="Toggle menu"
      >
        @if (mobileOpen()) {
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        } @else {
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        }
      </button>
    </nav>

    <!-- Separator -->
    <div class="h-px bg-border"></div>

    <!-- Mobile Menu -->
    @if (mobileOpen()) {
      <div class="md:hidden bg-background border-b border-border px-6 py-4 flex flex-col gap-3 animate-fade-in">
        @for (link of centerLinks; track link.label) {
          <a
            [routerLink]="link.route"
            (click)="mobileOpen.set(false)"
            class="text-sm font-medium py-2"
            [class.text-primary]="link.active"
            [class.text-secondary-foreground]="!link.active"
          >
            {{ link.label }}
          </a>
        }
        <div class="h-px bg-border my-2"></div>
        @for (action of rightActions; track action.label) {
          @if (action.style === 'primary') {
            <a
              [routerLink]="action.route"
              (click)="mobileOpen.set(false)"
              class="text-sm font-semibold bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-center hover:brightness-110 transition-all"
            >
              {{ action.label }}
            </a>
          } @else {
            <a
              [routerLink]="action.route"
              (click)="mobileOpen.set(false)"
              class="text-sm font-medium text-secondary-foreground py-2"
            >
              {{ action.label }}
            </a>
          }
        }
      </div>
    }
  `,
})
export class NavbarComponent {
  @Input() navStyle: 'pill' | 'plain' = 'pill';
  @Input() centerLinks: { label: string; route: string; active?: boolean }[] = [];
  @Input() rightActions: { label: string; route: string; style: 'text' | 'outline' | 'primary' | 'icon' }[] = [];
  @Input() banner?: { bold: string; text: string; link?: string };

  showBanner = signal(true);
  mobileOpen = signal(false);
}
