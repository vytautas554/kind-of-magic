import { Component, HostListener } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { CommonModule } from '@angular/common';
import { NAV_INFO } from './nav.constants';
import { NavInfo } from './nav.type';
import { MainLogoComponent } from '../main-logo/main-logo.component';
import { MainIconsComponent } from '../main-icons/main-icons.component';
import { Router } from '@angular/router';
import { ScreenSizeService } from '../../services/screen-size/screen-size.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    ButtonModule,
    SidebarModule,
    CommonModule,
    MainLogoComponent,
    MainIconsComponent,
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  public sidebarVisible = false;
  public navInfoArray: NavInfo[] = NAV_INFO;
  public innerWidth: number;
  readonly isScreenSizeMobile$ = this._screenSizeService.isScreenSizeMobile$;

  constructor(
    private readonly router: Router,
    private readonly _screenSizeService: ScreenSizeService,
  ) {}

  @HostListener('window:resize', ['$event'])
  public onWindowResize(event: any): void {
    this.innerWidth = event.target.innerWidth;
  }

  public showSidebar() {
    this.sidebarVisible = true;
  }

  public navigateTo(path: string): void {
    this.router.navigate([path]);
    this.sidebarVisible = false;
  }
}
