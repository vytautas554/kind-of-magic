import { Component, Input } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-me-first',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  templateUrl: './me-first.component.html',
  styleUrl: './me-first.component.scss',
})
export class MeFirstComponent {
  @Input() isScreenSizeMobile: boolean | null;
  @Input() isScreenSizeTabletOrMobile: boolean | null;
  @Input() imagesUrls: string[];
}
