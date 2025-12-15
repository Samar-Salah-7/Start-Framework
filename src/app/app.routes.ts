import { Routes } from '@angular/router';
import { Home } from './Components/home/home';
import { NotFoundPage } from './Components/not-found-page/not-found-page';
import { About } from './Components/about/about';
import { Portfolio } from './Components/portfolio/portfolio';
import { Contact } from './Components/contact/contact';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full', title: 'home' },
  { path: 'home', component: Home, title: 'home' },
  { path: 'about', component: About, title: 'about' },
  { path: 'portfolio', component: Portfolio, title: 'portfolio' },
  { path: 'contact', component: Contact, title: 'contact' },
  { path: '**', component: NotFoundPage, title: 'error' },
];
