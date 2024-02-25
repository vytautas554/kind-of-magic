import { Component, HostListener, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { CommonModule } from '@angular/common';
import { navInfo } from '../../../constants/nav.constants';
import { NavInfo } from '../models/nav.models';
import { MainLogoContainerComponent } from '../../main-logo-container/main-logo-container.component';
import { MainIconsContainerComponent } from '../../main-icons-container/main-icons-container.component';

@Component({
  selector: 'app-nav-layout-container',
  standalone: true,
  imports: [
    ButtonModule,
    SidebarModule,
    CommonModule,
    MainLogoContainerComponent,
    MainIconsContainerComponent,
  ],
  templateUrl: './nav-layout-container.component.html',
  styleUrl: './nav-layout-container.component.scss',
})
export class NavLayoutContainerComponent implements OnInit {
  public sidebarVisible = false;
  public navInfoArray: NavInfo[] = navInfo;
  public innerWidth: number;

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  public onWindowResize(event: any): void {
    this.innerWidth = event.target.innerWidth;
  }

  public showSidebar() {
    this.sidebarVisible = true;
  }
}
