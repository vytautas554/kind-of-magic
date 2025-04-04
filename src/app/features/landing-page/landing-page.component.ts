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
import {FirebaseImagesService} from "../../services/firebase/firebase-images.service";
import {AngularFireModule} from "@angular/fire/compat";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ImageContainerComponent, CardSectionComponent, MainFooterComponent, AngularFireModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  public headerImgInfo: ImageInfo = HeaderImgInfo;
  public aboutMeImgInfo: ImageInfo = AboutMeImgInfo;
  public cardSectionData: CardSectionData[] = CardSection;
  public test: string[]

  constructor(private readonly firebaseImagesService: FirebaseImagesService) {
  }

  public async ngOnInit(){
    // this.firebaseImagesService.getFiles()

    this.getFiles()

  }

  async getFiles() {
    await this.firebaseImagesService.getAllImages().then(urls => this.test = urls);

    console.log('test', this.test)


  }
}
