import { Component } from '@angular/core';
import { ImageContainerComponent } from './components/image-container/image-container.component';
import {
  AboutMeImgInfo,
  CardSection,
  HeaderImgInfo,
} from './landing-page.constants';
import { CardSectionData, ImageInfo } from './landing-page.type';
import { CardSectionComponent } from './components/card-section/card-section.component';
import { MainFooterComponent } from '../../components/main-footer/main-footer.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ImageContainerComponent, CardSectionComponent, MainFooterComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  public headerImgInfo: ImageInfo = HeaderImgInfo;
  public aboutMeImgInfo: ImageInfo = AboutMeImgInfo;
  public cardSectionData: CardSectionData[] = CardSection;
}
