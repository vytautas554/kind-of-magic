import { Component } from '@angular/core';
import { AboutMe } from '../models/about-me.models';
import { AboutMeInfo } from '../../../constants/about-me.constants';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-me-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me-container.component.html',
  styleUrl: './about-me-container.component.scss',
})
export class AboutMeContainerComponent {
  public aboutMeInfo: AboutMe[] = AboutMeInfo;
}
