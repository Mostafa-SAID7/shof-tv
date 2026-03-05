import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-gift-cards',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent, FooterComponent],
  template: `
    <div class="min-h-screen bg-background text-foreground">
      <app-navbar
        navStyle="plain"
        [centerLinks]="navLinks"
        [rightActions]="navActions"
      />

      <!-- Hero Banner -->
      <section class="mx-6 lg:mx-12 mt-6 rounded-xl bg-gradient-to-r from-primary/10 via-secondary to-primary/5 border border-border p-12 md:p-16 text-center">
        <h1 class="text-3xl md:text-5xl font-bold text-foreground mb-3">
          Give the Gift of <span class="text-primary">Movies</span>
        </h1>
        <p class="text-muted-foreground max-w-lg mx-auto leading-relaxed">
          ShofTV Gift Cards for the ultimate cinematic subscription experience.
          Choose digital delivery for instant access or physical for a premium unboxing.
        </p>
      </section>

      <div class="max-w-3xl mx-auto px-6 py-12">
        <!-- Amount Selection -->
        <h2 class="text-lg font-semibold text-foreground mb-4">Select Gift Card Amount</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          @for (amount of amounts; track amount.value) {
            <button
              (click)="selectAmount(amount.value)"
              class="relative flex flex-col items-center justify-center py-6 rounded-xl border transition-all"
              [class.border-primary]="selectedAmount() === amount.value"
              [class.bg-primary/5]="selectedAmount() === amount.value"
              [class.border-border]="selectedAmount() !== amount.value"
              [class.hover:border-border-highlight]="selectedAmount() !== amount.value"
            >
              @if (amount.popular) {
                <span class="absolute -top-2.5 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full">
                  Popular
                </span>
              }
              <span
                class="text-2xl font-bold"
                [class.text-primary]="selectedAmount() === amount.value"
                [class.text-foreground]="selectedAmount() !== amount.value"
              >
                {{ amount.label }}
              </span>
              @if (amount.sub) {
                <span class="text-xs text-muted-foreground mt-1">{{ amount.sub }}</span>
              }
            </button>
          }
        </div>

        <!-- Card Type -->
        <h2 class="text-lg font-semibold text-foreground mb-4">Choose Card Type</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
          @for (type of cardTypes; track type.value) {
            <button
              (click)="selectedCardType.set(type.value)"
              class="flex items-center gap-3 p-5 rounded-xl border transition-all text-left"
              [class.border-primary]="selectedCardType() === type.value"
              [class.bg-primary/5]="selectedCardType() === type.value"
              [class.border-border]="selectedCardType() !== type.value"
            >
              <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" [attr.d]="type.icon"/>
                </svg>
              </div>
              <div class="flex-1">
                <span class="text-sm font-semibold text-foreground">{{ type.label }}</span>
                <p class="text-xs text-muted-foreground mt-0.5">{{ type.description }}</p>
              </div>
              @if (selectedCardType() === type.value) {
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              }
            </button>
          }
        </div>

        <!-- Personalize -->
        <div class="bg-card/50 border border-border rounded-xl p-8 mb-10">
          <h2 class="text-lg font-semibold text-foreground mb-6">Personalize Your Gift</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label class="block text-xs font-semibold text-muted-foreground mb-2">Recipient's Name</label>
              <input
                type="text"
                [(ngModel)]="recipientName"
                placeholder="John Doe"
                class="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label class="block text-xs font-semibold text-muted-foreground mb-2">Recipient's Email</label>
              <input
                type="email"
                [(ngModel)]="recipientEmail"
                placeholder="john@example.com"
                class="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>
          <div>
            <label class="block text-xs font-semibold text-muted-foreground mb-2">Personal Message (Optional)</label>
            <textarea
              [(ngModel)]="personalMessage"
              placeholder="Hope you enjoy the movies!"
              rows="3"
              class="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            ></textarea>
          </div>
        </div>

        <!-- Total + Purchase -->
        <div class="border-t border-border pt-8 text-center">
          <div class="flex items-center justify-center gap-3 mb-6">
            <span class="text-muted-foreground">Total:</span>
            <span class="text-3xl font-bold text-foreground">{{ totalDisplay() }}</span>
          </div>
          <button
            class="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-10 py-3.5 rounded-lg hover:brightness-110 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
            </svg>
            Purchase Gift Card
          </button>
          <p class="text-xs text-muted-foreground mt-4">
            By purchasing, you agree to the ShofTV Gift Card Terms and Conditions. Gift cards are non-refundable.
          </p>
        </div>
      </div>

      <app-footer [bottomLinks]="footerLinks" />
    </div>
  `,
})
export class GiftCardsComponent {
  navLinks = [
    { label: 'Movies', route: '/movies' },
    { label: 'Theaters', route: '/theaters' },
    { label: 'Pricing', route: '/pricing' },
    { label: 'Gift Cards', route: '/gift-cards', active: true },
  ];

  navActions = [
    { label: '', route: '/account', style: 'icon' as const },
  ];

  amounts = [
    { value: 25, label: '$25', popular: false },
    { value: 50, label: '$50', popular: true },
    { value: 100, label: '$100', popular: false },
    { value: 0, label: 'Custom', sub: 'Amount', popular: false },
  ];

  cardTypes = [
    {
      value: 'digital',
      label: 'Digital Card',
      description: 'Delivered instantly via email',
      icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    },
    {
      value: 'physical',
      label: 'Physical Card',
      description: 'Mailed in premium packaging',
      icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
    },
  ];

  selectedAmount = signal(50);
  selectedCardType = signal('digital');
  customAmount = '';
  recipientName = '';
  recipientEmail = '';
  personalMessage = '';

  totalDisplay = computed(() => {
    const amt = this.selectedAmount();
    return amt === 0 ? '$0.00' : `$${amt.toFixed(2)}`;
  });

  footerLinks = [
    { label: 'Terms of Service', route: '/terms' },
    { label: 'Privacy Policy', route: '/privacy' },
  ];

  selectAmount(value: number) {
    this.selectedAmount.set(value);
  }
}
