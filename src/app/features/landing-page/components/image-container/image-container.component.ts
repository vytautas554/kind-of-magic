import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { CommonButtonComponent } from '../../../../components/common-button/common-button.component';
import { aboutMePath } from '../../../about-me/about-me.const';

@Component({
  selector: 'app-image-container',
  standalone: true,
  imports: [ImageModule, CommonModule, CommonButtonComponent],
  templateUrl: './image-container.component.html',
  styleUrl: './image-container.component.scss',
})
export class ImageContainerComponent {
  @Input() public showTitle = false;
  @Input() public showCta = false;
  @Input() public description = '';
  @Input() public imageSrc = '';
  @Input() public title = '';

  public aboutMePath: string = aboutMePath;
}
