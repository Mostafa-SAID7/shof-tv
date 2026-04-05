import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HelpComponent } from './pages/help/help.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { GiftCardsComponent } from './pages/gift-cards/gift-cards.component';
import { TicketComponent } from './pages/ticket/ticket.component';
import { ConcessionsComponent } from './pages/concessions/concessions.component';
import { FriendsComponent } from './pages/friends/friends.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'help', component: HelpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'gift-cards', component: GiftCardsComponent },
  { path: 'ticket', component: TicketComponent },
  { path: 'concessions', component: ConcessionsComponent },
  { path: 'friends', component: FriendsComponent },
  { path: '**', redirectTo: '' }
];
