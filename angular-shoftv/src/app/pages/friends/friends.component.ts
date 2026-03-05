import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-friends',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent, FooterComponent],
  template: `
    <div class="min-h-screen bg-background text-foreground">
      <app-navbar
        navStyle="plain"
        [centerLinks]="navLinks"
        [rightActions]="navActions"
      />

      <div class="max-w-6xl mx-auto px-6 lg:px-12 py-10">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <!-- Left: Friends List -->
          <div class="lg:col-span-1">
            <h2 class="text-2xl font-bold text-foreground mb-2">Friends</h2>
            <p class="text-sm text-muted-foreground mb-6">See who's online and what they're watching</p>

            <div class="flex flex-col gap-3">
              @for (friend of friends; track friend.name) {
                <div class="flex items-center gap-3 p-4 rounded-xl border border-border bg-card/30">
                  <!-- Avatar -->
                  <div class="relative w-11 h-11 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                    <span
                      class="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-card"
                      [class.bg-success]="friend.online"
                      [class.bg-muted-foreground]="!friend.online"
                    ></span>
                  </div>

                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-semibold text-foreground">{{ friend.name }}</p>
                    @if (friend.watching) {
                      <p class="text-xs text-primary truncate">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 inline mr-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                        {{ friend.watching }}
                      </p>
                    } @else {
                      <p class="text-xs text-muted-foreground">{{ friend.status }}</p>
                    }
                  </div>

                  <button class="text-xs font-medium bg-secondary border border-border text-foreground px-3 py-1.5 rounded-lg hover:border-border-highlight transition-colors">
                    Profile
                  </button>
                </div>
              }
            </div>

            <button class="w-full flex items-center justify-center gap-2 text-sm text-muted-foreground border border-border rounded-xl py-3 mt-4 hover:text-foreground hover:border-border-highlight transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              View All Friends
            </button>
          </div>

          <!-- Right: Activity Feed -->
          <div class="lg:col-span-2">
            <h2 class="text-2xl font-bold text-foreground mb-2">Recent Activity</h2>
            <p class="text-sm text-muted-foreground mb-6">What your network is watching and rating</p>

            <div class="flex flex-col gap-6">
              @for (activity of activities; track activity.id) {
                <div class="p-5 rounded-xl border border-border bg-card/30">
                  <div class="flex items-start gap-4">
                    <!-- Movie Poster Placeholder -->
                    <div class="w-24 h-36 rounded-lg bg-secondary border border-border shrink-0 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-muted-foreground/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"/>
                      </svg>
                    </div>

                    <div class="flex-1">
                      <!-- Header -->
                      <div class="flex items-center justify-between mb-2">
                        <p class="text-sm">
                          <span class="font-semibold text-foreground">{{ activity.user }}</span>
                          <span class="text-muted-foreground"> {{ activity.action }} </span>
                          <span class="font-semibold text-primary">{{ activity.movie }}</span>
                          @if (activity.target) {
                            <span class="text-muted-foreground"> to {{ activity.target }}</span>
                          }
                        </p>
                        <span class="text-xs text-muted-foreground shrink-0 ml-3">{{ activity.time }}</span>
                      </div>

                      <!-- Stars -->
                      @if (activity.rating) {
                        <div class="flex items-center gap-0.5 mb-2">
                          @for (star of [1,2,3,4,5]; track star) {
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-4 h-4"
                              [class.text-primary]="star <= activity.rating!"
                              [class.text-muted-foreground/30]="star > activity.rating!"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                          }
                        </div>
                      }

                      <!-- Review Quote -->
                      @if (activity.review) {
                        <div class="border-l-2 border-primary/30 pl-4 py-2 mb-3">
                          <p class="text-sm text-muted-foreground italic">"{{ activity.review }}"</p>
                        </div>
                      }

                      <!-- Description -->
                      @if (activity.description) {
                        <p class="text-sm text-muted-foreground mb-3">{{ activity.description }}</p>
                      }

                      <!-- Actions -->
                      @if (activity.likes !== undefined) {
                        <div class="flex items-center gap-4 text-xs text-muted-foreground">
                          <button class="flex items-center gap-1 hover:text-primary transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>
                            </svg>
                            {{ activity.likes }}
                          </button>
                          @if (activity.comments !== undefined) {
                            <button class="flex items-center gap-1 hover:text-primary transition-colors">
                              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                              </svg>
                              {{ activity.comments }} Comments
                            </button>
                          }
                          @if (activity.replyable) {
                            <button class="flex items-center gap-1 hover:text-primary transition-colors">
                              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
                              </svg>
                              Reply
                            </button>
                          }
                        </div>
                      }
                    </div>
                  </div>
                </div>
              }
            </div>

            <div class="text-center mt-8">
              <button class="border border-border text-foreground font-medium px-8 py-3 rounded-full hover:border-border-highlight transition-colors text-sm">
                Load More Activity
              </button>
            </div>
          </div>
        </div>
      </div>

      <app-footer [bottomLinks]="footerLinks" />
    </div>
  `,
})
export class FriendsComponent {
  navLinks = [
    { label: 'Home', route: '/' },
    { label: 'Movies', route: '/movies' },
    { label: 'TV Shows', route: '/tv' },
    { label: 'Friends', route: '/friends', active: true },
  ];

  navActions = [
    { label: 'Add Friend', route: '/friends/add', style: 'outline' as const },
    { label: '', route: '/account', style: 'icon' as const },
  ];

  friends = [
    { name: 'Marcus Chen', online: true, watching: 'Watching Dune: Part Two', status: '' },
    { name: 'Sarah Jenkins', online: true, watching: null, status: 'Online' },
    { name: 'David Kim', online: false, watching: null, status: 'Last seen 2h ago' },
    { name: 'Elena Rodriguez', online: false, watching: null, status: 'Last seen yesterday' },
  ];

  activities: {
    id: number;
    user: string;
    action: string;
    movie: string;
    target?: string;
    time: string;
    rating?: number;
    review?: string;
    description?: string;
    likes?: number;
    comments?: number;
    replyable?: boolean;
  }[] = [
    {
      id: 1,
      user: 'Marcus Chen',
      action: 'watched',
      movie: 'Oppenheimer',
      time: '2h ago',
      rating: 5,
      review: 'Absolutely mind-blowing cinematography. A masterpiece from Nolan.',
      likes: 12,
      comments: 3,
    },
    {
      id: 2,
      user: 'Sarah Jenkins',
      action: 'added',
      movie: 'The Matrix',
      target: 'Watchlist',
      time: '5h ago',
      description: 'Planning to rewatch this classic over the weekend!',
    },
    {
      id: 3,
      user: 'David Kim',
      action: 'watched',
      movie: 'Blade Runner 2049',
      time: '1d ago',
      rating: 4,
      review: 'Visually stunning, but pacing felt a bit slow in the middle act.',
      likes: 4,
      replyable: true,
    },
  ];

  footerLinks = [
    { label: 'Terms of Service', route: '/terms' },
    { label: 'Privacy Policy', route: '/privacy' },
  ];
}
