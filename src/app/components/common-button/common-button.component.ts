import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common-button',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './common-button.component.html',
  styleUrl: './common-button.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CommonButtonComponent {
  @Input() public isRounded = true;
  @Input() public label = 'Daugiau';
  @Input() public path: string;

  constructor(private readonly router: Router) {}

  public navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
