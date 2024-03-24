import { Component, Input } from '@angular/core';
import { facebookUrl, instagramUrl } from '../../constants/links.constants';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-icons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-icons.component.html',
  styleUrl: './main-icons.component.scss',
})
export class MainIconsComponent {
  @Input() public innerWidth: number;

  protected readonly facebookUrl: string = facebookUrl;
  protected readonly instagramUrl: string = instagramUrl;

  public redirectToUrl(url: string) {
    window.open(url, '_blank');
  }
}
