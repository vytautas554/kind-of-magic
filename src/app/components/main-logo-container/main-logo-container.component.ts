import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-logo-container',
  standalone: true,
  imports: [],
  templateUrl: './main-logo-container.component.html',
  styleUrl: './main-logo-container.component.scss',
})
export class MainLogoContainerComponent {
  @Input() public paddingRight: string = '';

  public logoPath = '../../assets/img/logo/A_Kind_of_Magic_Dark.png';
}
