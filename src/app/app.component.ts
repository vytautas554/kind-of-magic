import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavLayoutContainerComponent } from './components/nav/components/nav-layout-container/nav-layout-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavLayoutContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'kind-of-magic-fe';
}
