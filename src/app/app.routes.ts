import { Routes } from '@angular/router';
import { AboutMeContainerComponent } from './features/about-me/about-me-container/about-me-container.component';
import { LandingPageContainerComponent } from './features/landing-page/landing-page-container/landing-page-container.component';
import { PricesComponent } from './features/prices/prices.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pagrindinis',
    pathMatch: 'full',
  },
  {
    path: 'pagrindinis',
    component: LandingPageContainerComponent,
  },
  {
    path: 'apie-mane',
    component: AboutMeContainerComponent,
  },
  { path: 'kainos', component: PricesComponent },
];
