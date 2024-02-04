import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavLayoutContainerComponent } from '../app/components/nav/nav-layout-container/nav-layout-container.component';
import { LandingPageContainerComponent } from './features/landing-page/landing-page-container/landing-page-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavLayoutContainerComponent,
    LandingPageContainerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'kind-of-magic-fe';
}
