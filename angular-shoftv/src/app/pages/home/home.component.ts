import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  template: `
    <div class="min-h-screen bg-background text-foreground">
      <!-- Navbar -->
      <app-navbar
        navStyle="pill"
        [centerLinks]="navLinks"
        [rightActions]="navActions"
      />

      <!-- Hero Section -->
      <section class="relative flex flex-col items-center justify-center text-center px-6 py-32 lg:py-44 overflow-hidden">
        <!-- Background gradient overlay -->
        <div class="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background pointer-events-none"></div>
        <!-- Subtle radial glow -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

        <div class="relative z-10 max-w-4xl mx-auto">
          <!-- Pill badge -->
          <div class="inline-block border border-border rounded-full px-4 py-1.5 text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-8">
            The Future of Cinema
          </div>

          <!-- Main headline -->
          <h1 class="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight mb-6">
            <span class="text-primary italic font-display">Infinite</span>
            <span class="text-foreground font-sans font-black"> Movies.</span>
            <br />
            <span class="text-secondary-foreground font-sans font-light text-4xl md:text-6xl lg:text-7xl">One Subscription.</span>
          </h1>

          <!-- Subtitle -->
          <p class="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Watch a new movie every day at any theater near you.
            No blackout dates, no hidden fees. Just pure cinematic immersion.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              class="w-full sm:w-auto bg-primary text-primary-foreground font-bold text-sm uppercase tracking-wider px-10 py-4 rounded-full hover:brightness-110 transition-all"
            >
              Start Free Trial
            </a>
            <a
              href="#"
              class="w-full sm:w-auto border border-foreground/20 text-foreground font-bold text-sm uppercase tracking-wider px-10 py-4 rounded-full hover:bg-foreground/5 transition-all"
            >
              Find Theaters
            </a>
          </div>
        </div>
      </section>

      <!-- Studio Partners -->
      <section class="border-t border-border py-12 px-6">
        <p class="text-center text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground mb-8">
          Official Studio Partners
        </p>
        <div class="flex items-center justify-center gap-12 md:gap-20 flex-wrap opacity-40">
          @for (studio of studios; track studio) {
            <span class="text-xl md:text-2xl font-display italic text-foreground tracking-wide">
              {{ studio }}
            </span>
          }
        </div>
      </section>

      <!-- How It Works -->
      <section class="section-padding max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4">How ShofTV Works</h2>
          <p class="text-muted-foreground max-w-lg mx-auto">
            Three simple steps to unlimited cinema
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          @for (step of howItWorks; track step.title; let i = $index) {
            <div class="flex flex-col items-center text-center p-8 rounded-xl border border-border bg-card/50 card-hover">
              <div class="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-bold mb-5">
                {{ i + 1 }}
              </div>
              <h3 class="text-lg font-semibold text-foreground mb-3">{{ step.title }}</h3>
              <p class="text-sm text-muted-foreground leading-relaxed">{{ step.description }}</p>
            </div>
          }
        </div>
      </section>

      <!-- Features Grid -->
      <section class="section-padding max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose ShofTV</h2>
          <p class="text-muted-foreground max-w-lg mx-auto">
            The premium movie experience, redefined
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (feature of features; track feature.title) {
            <div class="p-6 rounded-xl border border-border bg-card/30 card-hover">
              <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" [attr.d]="feature.icon"/>
                </svg>
              </div>
              <h3 class="text-base font-semibold text-foreground mb-2">{{ feature.title }}</h3>
              <p class="text-sm text-muted-foreground leading-relaxed">{{ feature.description }}</p>
            </div>
          }
        </div>
      </section>

      <!-- Pricing Preview -->
      <section class="section-padding max-w-5xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4">Simple Pricing</h2>
          <p class="text-muted-foreground max-w-lg mx-auto">
            Choose the plan that fits your movie habit
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          @for (plan of plans; track plan.name) {
            <div
              class="relative flex flex-col p-6 rounded-xl border bg-card/30"
              [class.border-primary]="plan.popular"
              [class.border-border]="!plan.popular"
            >
              @if (plan.popular) {
                <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                  Most Popular
                </div>
              }
              <h3 class="text-lg font-semibold text-foreground mb-1">{{ plan.name }}</h3>
              <p class="text-sm text-muted-foreground mb-4">{{ plan.description }}</p>
              <div class="mb-6">
                <span class="text-3xl font-bold text-foreground">{{ plan.price }}</span>
                <span class="text-muted-foreground text-sm">/month</span>
              </div>
              <ul class="flex-1 flex flex-col gap-3 mb-6">
                @for (feat of plan.features; track feat) {
                  <li class="flex items-start gap-2 text-sm text-card-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                    {{ feat }}
                  </li>
                }
              </ul>
              <a
                href="#"
                class="text-center text-sm font-semibold py-3 rounded-full transition-all"
                [class.bg-primary]="plan.popular"
                [class.text-primary-foreground]="plan.popular"
                [class.hover:brightness-110]="plan.popular"
                [class.border]="!plan.popular"
                [class.border-border]="!plan.popular"
                [class.text-foreground]="!plan.popular"
                [class.hover:border-primary]="!plan.popular"
                [class.hover:text-primary]="!plan.popular"
              >
                Get Started
              </a>
            </div>
          }
        </div>
      </section>

      <!-- CTA Section -->
      <section class="section-padding">
        <div class="max-w-3xl mx-auto text-center bg-card/50 border border-border rounded-2xl p-12 md:p-16">
          <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Watch?</h2>
          <p class="text-muted-foreground mb-8 max-w-md mx-auto">
            Join thousands of movie lovers who are already enjoying unlimited cinema with ShofTV.
          </p>
          <a
            href="#"
            class="inline-block bg-primary text-primary-foreground font-bold text-sm uppercase tracking-wider px-10 py-4 rounded-full hover:brightness-110 transition-all"
          >
            Start Your Free Trial
          </a>
        </div>
      </section>

      <!-- Cookie Banner (static) -->
      <div class="fixed bottom-0 left-0 right-0 bg-card border-t border-border px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-3 z-50" *ngIf="showCookieBanner">
        <p class="text-xs text-muted-foreground">
          We use cookies on our website to see how you interact with it. By accepting, you agree to our use of such cookies.
          <a href="#" class="text-primary hover:underline ml-1">Privacy Policy</a>
        </p>
        <div class="flex items-center gap-3">
          <button (click)="showCookieBanner = false" class="text-xs font-medium text-foreground border border-border px-4 py-2 rounded hover:border-border-highlight transition-colors">
            SETTINGS
          </button>
          <button (click)="showCookieBanner = false" class="text-xs font-medium bg-foreground text-background px-4 py-2 rounded hover:bg-foreground/90 transition-colors">
            ACCEPT
          </button>
        </div>
      </div>
    </div>
  `,
})
export class HomeComponent {
  showCookieBanner = true;

  announcementBanner = {
    bold: "WE'RE RAISING ON WEFUNDER!",
    text: 'Movie Lovers, Creators, Investors - Own a piece of the entertainment revolution.',
    link: 'LEARN MORE',
  };

  navLinks = [
    { label: 'INFINITE', route: '/', active: true },
    { label: 'THEATERS', route: '/theaters' },
    { label: 'PRICING', route: '/pricing' },
  ];

  navActions = [
    { label: 'LOG IN', route: '/login', style: 'text' as const },
    { label: 'JOIN NOW', route: '/signup', style: 'primary' as const },
  ];

  studios = ['Warner Bros.', 'Universal', 'Paramount', 'Lionsgate', 'A24'];

  howItWorks = [
    {
      title: 'Pick Your Plan',
      description: 'Choose from our flexible subscription tiers. Start with a free trial and upgrade anytime.',
    },
    {
      title: 'Find a Theater',
      description: 'Browse showings at any participating theater near you. Reserve your seat in seconds.',
    },
    {
      title: 'Enjoy the Show',
      description: 'Present your digital ticket, grab your popcorn, and experience cinema the way it was meant to be.',
    },
  ];

  features = [
    {
      title: 'Unlimited Movies',
      description: 'Watch a new movie every day at any participating theater. No restrictions, no limits.',
      icon: 'M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z',
    },
    {
      title: 'IMAX & Premium',
      description: 'Access premium formats including IMAX, Dolby Atmos, and 4DX at no extra cost.',
      icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
    },
    {
      title: 'Pre-order Concessions',
      description: 'Skip the line. Order your popcorn, drinks, and snacks ahead of time.',
      icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z',
    },
    {
      title: 'Bring Friends',
      description: 'Share your movie nights. Add friends and track what everyone is watching.',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    },
    {
      title: 'Gift Cards',
      description: 'Give the gift of movies. Digital or physical cards for any occasion.',
      icon: 'M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7',
    },
    {
      title: '24/7 Support',
      description: 'Our team is here around the clock. Live chat, email, or phone — we have you covered.',
      icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
    },
  ];

  plans = [
    {
      name: 'Basic',
      description: 'Perfect for casual moviegoers',
      price: '$9.99',
      popular: false,
      features: [
        '3 movies per month',
        'Standard screens only',
        'Mobile ticketing',
        'Basic concession discounts',
      ],
    },
    {
      name: 'Premium',
      description: 'For the dedicated film lover',
      price: '$19.99',
      popular: true,
      features: [
        'Unlimited movies',
        'IMAX & premium formats',
        'Priority seating',
        'Free concession upgrades',
        'Bring a friend once/month',
      ],
    },
    {
      name: 'Family',
      description: 'Movie nights for everyone',
      price: '$34.99',
      popular: false,
      features: [
        'Unlimited movies for 4',
        'All premium formats',
        'Family concession bundles',
        'Kids screening access',
      ],
    },
  ];
}
