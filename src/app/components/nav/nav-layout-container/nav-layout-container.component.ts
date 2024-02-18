import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { CommonModule } from '@angular/common';
import { facebookUrl, instagramUrl } from '../../../constants/links.constants';
import { navInfo } from '../../../constants/nav.constants';
import { NavInfo } from '../models/nav.models';

@Component({
  selector: 'app-nav-layout-container',
  standalone: true,
  imports: [ButtonModule, SidebarModule, CommonModule],
  templateUrl: './nav-layout-container.component.html',
  styleUrl: './nav-layout-container.component.scss',
})
export class NavLayoutContainerComponent {
  public logoPath = '../../../assets/img/logo/A_Kind_of_Magic_Dark.png';
  public facebookUrl = facebookUrl;
  public instagramUrl = instagramUrl;
  public sidebarVisible = false;
  public navInfoArray: NavInfo[] = navInfo;

  public redirectToUrl(url: string) {
    window.open(url, '_blank');
  }

  public showSidebar() {
    this.sidebarVisible = true;
  }
}
