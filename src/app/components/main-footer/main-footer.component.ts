import { Component } from '@angular/core';
import { MainLogoContainerComponent } from '../main-logo-container/main-logo-container.component';
import { facebookUrl, instagramUrl } from '../../constants/links.constants';
import { MainIconsContainerComponent } from '../main-icons-container/main-icons-container.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-footer',
  standalone: true,
  imports: [
    MainLogoContainerComponent,
    MainIconsContainerComponent,
    CommonModule,
  ],
  templateUrl: './main-footer.component.html',
  styleUrl: './main-footer.component.scss',
})
export class MainFooterComponent {
  protected readonly instagramUrl: string = instagramUrl;

  public images = [
    {
      src: '../../../assets/img/test-images/DSC_0121.jpg',
      alt: 'DSC_0121',
    },
    {
      src: '../../../assets/img/test-images/DSC_0183-Edit.jpg',
      alt: 'DSC_0183',
    },
    {
      src: '../../../assets/img/test-images/DSC_7126.jpg',
      alt: 'DSC_7126',
    },
    {
      src: '../../../assets/img/test-images/ggg.578-Edit.jpg',
      alt: 'ggg.578',
    },
    {
      src: '../../../assets/img/test-images/ggg-Edit.jpg',
      alt: 'ggg',
    },
    {
      src: '../../../assets/img/test-images/Justina ir Vaidas.1052-Edit.jpg',
      alt: 'Justina ir Vaidas',
    },
  ];
}
