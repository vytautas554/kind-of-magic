import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-logo',
  standalone: true,
  imports: [],
  templateUrl: './main-logo.component.html',
  styleUrl: './main-logo.component.scss',
})
export class MainLogoComponent {
  @Input() public paddingRight: string = '';

  public logoPath = '../../assets/img/logo/A_Kind_of_Magic_Dark.png';
}
