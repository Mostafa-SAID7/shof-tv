import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ContentItem {
  title: string;
  category: string;
  badge: string;
  gradient: string;
}

@Component({
  selector: 'app-content-carousel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="channels" class="py-20 lg:py-28">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="flex items-end justify-between mb-10">
          <div>
            <span
              class="text-xs font-semibold text-primary tracking-widest uppercase"
              >Popular Now</span
            >
            <h2
              class="mt-3 text-3xl sm:text-4xl font-display font-bold text-foreground tracking-tight"
            >
              Trending Content
            </h2>
          </div>
          <div class="hidden sm:flex items-center gap-2">
            <button
              class="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
              (click)="scrollCarousel('left')"
              aria-label="Scroll left"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              class="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
              (click)="scrollCarousel('right')"
              aria-label="Scroll right"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- Category Tabs -->
        <div class="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
          <button
            *ngFor="let cat of categories"
            class="shrink-0 text-sm font-medium px-5 py-2 rounded-full transition-colors"
            [class.bg-primary]="activeCategory === cat"
            [class.text-primary-foreground]="activeCategory === cat"
            [class.bg-secondary]="activeCategory !== cat"
            [class.text-secondary-foreground]="activeCategory !== cat"
            [class.hover:bg-secondary/80]="activeCategory !== cat"
            (click)="activeCategory = cat"
          >
            {{ cat }}
          </button>
        </div>

        <!-- Carousel -->
        <div
          #carouselRef
          class="flex gap-5 overflow-x-auto scroll-snap-x pb-4 -mx-4 px-4"
          style="scrollbar-width: none; -ms-overflow-style: none;"
        >
          <div
            *ngFor="let item of filteredContent"
            class="shrink-0 w-64 sm:w-72 scroll-snap-center group cursor-pointer"
          >
            <div
              class="relative aspect-[3/4] rounded-xl overflow-hidden"
              [class]="item.gradient"
            >
              <!-- Overlay on hover -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>

              <!-- Badge -->
              <div class="absolute top-3 left-3">
                <span
                  class="bg-primary text-primary-foreground text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide"
                  >{{ item.badge }}</span
                >
              </div>

              <!-- Play button on hover -->
              <div
                class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div
                  class="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center"
                >
                  <svg
                    class="w-6 h-6 text-primary-foreground ml-0.5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              </div>

              <!-- Bottom info on hover -->
              <div
                class="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
              >
                <span class="text-[10px] font-semibold text-primary uppercase tracking-wider">
                  {{ item.category }}
                </span>
                <h3 class="text-sm font-display font-semibold text-foreground mt-1">
                  {{ item.title }}
                </h3>
              </div>
            </div>

            <!-- Title below card -->
            <div class="mt-3">
              <h3 class="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                {{ item.title }}
              </h3>
              <p class="text-xs text-muted-foreground mt-0.5">{{ item.category }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ContentCarouselComponent {
  @ViewChild('carouselRef') carouselRef!: ElementRef<HTMLDivElement>;

  activeCategory = 'All';

  categories = ['All', 'Live', 'Movies', 'Series', 'Sports', 'Kids'];

  contentItems: ContentItem[] = [
    { title: 'Desert Nights', category: 'Series', badge: 'New', gradient: 'bg-gradient-to-br from-primary/40 to-secondary' },
    { title: 'Champions League Live', category: 'Sports', badge: 'Live', gradient: 'bg-gradient-to-br from-accent/40 to-secondary' },
    { title: 'City Lights', category: 'Movies', badge: 'HD', gradient: 'bg-gradient-to-br from-primary/30 to-muted' },
    { title: 'Morning Buzz', category: 'Live', badge: 'Live', gradient: 'bg-gradient-to-br from-accent/30 to-muted' },
    { title: 'Cartoon World', category: 'Kids', badge: 'Fun', gradient: 'bg-gradient-to-br from-primary/40 to-accent/20' },
    { title: 'The Grand Tour', category: 'Series', badge: 'Top', gradient: 'bg-gradient-to-br from-secondary to-primary/30' },
    { title: 'Ocean Blue', category: 'Movies', badge: '4K', gradient: 'bg-gradient-to-br from-muted to-accent/30' },
    { title: 'Premier League', category: 'Sports', badge: 'Live', gradient: 'bg-gradient-to-br from-primary/30 to-secondary' },
    { title: 'Tiny Explorers', category: 'Kids', badge: 'New', gradient: 'bg-gradient-to-br from-accent/30 to-primary/20' },
    { title: 'Breaking News 24', category: 'Live', badge: 'Live', gradient: 'bg-gradient-to-br from-primary/50 to-secondary' },
  ];

  get filteredContent(): ContentItem[] {
    if (this.activeCategory === 'All') return this.contentItems;
    return this.contentItems.filter((item) => item.category === this.activeCategory);
  }

  scrollCarousel(direction: 'left' | 'right') {
    if (!this.carouselRef) return;
    const el = this.carouselRef.nativeElement;
    const scrollAmount = 300;
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  }
}
