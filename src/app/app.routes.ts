import { Routes } from '@angular/router';
import { AboutMeComponent } from './features/about-me/about-me.component';
import { LandingPageContainerComponent } from './features/landing-page/landing-page-container/landing-page-container.component';
import { PricesComponent } from './features/prices/prices.component';
import { PageUnderConstructionComponent } from './components/page-under-construction/page-under-construction.component';
import { DukComponent } from './features/duk/duk.component';

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
    component: AboutMeComponent,
  },
  { path: 'kainos', component: PricesComponent },
  { path: 'duk', component: DukComponent },
  { path: 'puslapis-atnaujinamas', component: PageUnderConstructionComponent },
];
