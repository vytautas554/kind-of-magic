import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-common-button',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './common-button.component.html',
  styleUrl: './common-button.component.scss',
})
export class CommonButtonComponent {
  @Input() public isRounded = true;
  @Input() public label = 'Daugiau';
}
