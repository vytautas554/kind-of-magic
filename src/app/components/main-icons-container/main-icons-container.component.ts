import { Component, HostListener, Input, OnInit } from '@angular/core';
import { facebookUrl, instagramUrl } from '../../constants/links.constants';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-icons-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-icons-container.component.html',
  styleUrl: './main-icons-container.component.scss',
})
export class MainIconsContainerComponent {
  @Input() public innerWidth: number;

  protected readonly facebookUrl: string = facebookUrl;
  protected readonly instagramUrl: string = instagramUrl;

  public redirectToUrl(url: string) {
    window.open(url, '_blank');
  }
}
