import { Component } from '@angular/core';
import { ImageContainerComponent } from '../components/image-container/image-container.component';
import {
  AboutMeImgInfo,
  CardSection,
  HeaderImgInfo,
} from '../../../constants/landing-page.constants';
import { CardSectionData, ImageInfo } from '../models/landing-page.model';
import { CardSectionContainerComponent } from '../components/card-section-container/card-section-container.component';

@Component({
  selector: 'app-landing-page-container',
  standalone: true,
  imports: [ImageContainerComponent, CardSectionContainerComponent],
  templateUrl: './landing-page-container.component.html',
  styleUrl: './landing-page-container.component.scss',
})
export class LandingPageContainerComponent {
  public headerImgInfo: ImageInfo = HeaderImgInfo;
  public aboutMeImgInfo: ImageInfo = AboutMeImgInfo;
  public cardSectionData: CardSectionData[] = CardSection;
}
