import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative min-h-screen flex items-center overflow-hidden">
      <!-- Background gradient layers -->
      <div class="absolute inset-0 bg-background"></div>
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(229,9,20,0.15)_0%,_transparent_60%)]"
      ></div>
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,107,53,0.08)_0%,_transparent_50%)]"
      ></div>

      <!-- Grid pattern overlay -->
      <div
        class="absolute inset-0 opacity-[0.03]"
        style="background-image: url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;1&quot;%3E%3Cpath d=&quot;M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
      ></div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <!-- Left content -->
          <div class="flex-1 text-center lg:text-left">
            <div
              class="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6 animate-fade-in"
            >
              <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span class="text-xs font-medium text-primary tracking-wide uppercase">
                Live Now - 200+ Channels
              </span>
            </div>

            <h1
              class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-extrabold leading-[1.1] tracking-tight text-foreground animate-fade-in-up text-balance"
            >
              Watch What
              <br />
              <span
                class="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                >Matters</span
              >
            </h1>

            <p
              class="mt-6 text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up text-pretty"
              style="animation-delay: 0.15s"
            >
              Your gateway to local entertainment, live TV channels, and
              on-demand streaming. All fully licensed. All in one place.
            </p>

            <!-- CTA buttons -->
            <div
              class="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start animate-fade-in-up"
              style="animation-delay: 0.3s"
            >
              <button
                class="w-full sm:w-auto bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-lg text-base hover:bg-primary/90 transition-all animate-pulse-glow"
              >
                Start Watching Free
              </button>
              <button
                class="w-full sm:w-auto border border-border text-foreground font-medium px-8 py-4 rounded-lg text-base hover:bg-secondary transition-colors flex items-center justify-center gap-2"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <polygon
                    points="5 3 19 12 5 21 5 3"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
                Watch Trailer
              </button>
            </div>

            <!-- Stats -->
            <div
              class="mt-12 flex items-center gap-8 justify-center lg:justify-start animate-fade-in"
              style="animation-delay: 0.45s"
            >
              <div *ngFor="let stat of stats" class="text-center lg:text-left">
                <div class="text-2xl lg:text-3xl font-display font-bold text-foreground">
                  {{ stat.value }}
                </div>
                <div class="text-xs text-muted-foreground mt-1">{{ stat.label }}</div>
              </div>
            </div>
          </div>

          <!-- Right content - Featured card -->
          <div class="flex-1 max-w-lg w-full animate-fade-in" style="animation-delay: 0.3s">
            <div class="relative group">
              <!-- Glow effect -->
              <div
                class="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"
              ></div>

              <!-- Card -->
              <div
                class="relative bg-card border border-border rounded-2xl overflow-hidden"
              >
                <!-- Fake video thumbnail -->
                <div
                  class="aspect-video bg-gradient-to-br from-secondary to-muted relative"
                >
                  <!-- Play button overlay -->
                  <div
                    class="absolute inset-0 flex items-center justify-center"
                  >
                    <div
                      class="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer hover:bg-primary transition-colors hover:scale-110 transform"
                    >
                      <svg
                        class="w-7 h-7 text-primary-foreground ml-1"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                  </div>

                  <!-- Live badge -->
                  <div class="absolute top-4 left-4">
                    <span
                      class="inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-md"
                    >
                      <span class="w-1.5 h-1.5 rounded-full bg-primary-foreground animate-pulse"></span>
                      LIVE
                    </span>
                  </div>

                  <!-- HD badge -->
                  <div class="absolute top-4 right-4">
                    <span
                      class="bg-background/70 text-foreground text-xs font-semibold px-2.5 py-1 rounded-md backdrop-blur-sm"
                      >HD</span
                    >
                  </div>
                </div>

                <!-- Card content -->
                <div class="p-5">
                  <div class="flex items-start justify-between gap-3">
                    <div>
                      <h3 class="font-display font-semibold text-foreground text-lg">
                        Trending Now
                      </h3>
                      <p class="text-sm text-muted-foreground mt-1">
                        Popular shows, live sports, and exclusive content
                      </p>
                    </div>
                    <span
                      class="shrink-0 bg-accent/10 text-accent text-xs font-semibold px-2.5 py-1 rounded-md"
                      >NEW</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HeroComponent {
  stats = [
    { value: '200+', label: 'Live Channels' },
    { value: '50K+', label: 'Hours of Content' },
    { value: '4K', label: 'Ultra HD' },
  ];
}
