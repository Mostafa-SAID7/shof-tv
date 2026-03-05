import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesComponent } from './components/features/features.component';
import { ContentCarouselComponent } from './components/content-carousel/content-carousel.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { DevicesComponent } from './components/devices/devices.component';
import { FaqComponent } from './components/faq/faq.component';
import { CtaComponent } from './components/cta/cta.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    FeaturesComponent,
    ContentCarouselComponent,
    PricingComponent,
    DevicesComponent,
    FaqComponent,
    CtaComponent,
    FooterComponent,
  ],
  template: `
    <app-navbar />
    <main>
      <app-hero />
      <app-features />
      <app-content-carousel />
      <app-pricing />
      <app-devices />
      <app-faq />
      <app-cta />
    </main>
    <app-footer />
  `,
})
export class AppComponent {
  title = 'ShofTV - Watch What Matters';
}
