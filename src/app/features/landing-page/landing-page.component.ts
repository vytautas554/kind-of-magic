import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ImageContainerComponent } from './components/image-container/image-container.component';
import { ImageData } from './landing-page.type';
import { CardSectionComponent } from './components/card-section/card-section.component';
import { MainFooterComponent } from '../../components/main-footer/main-footer.component';
import { AngularFireModule } from '@angular/fire/compat';
import { ScreenSizeService } from '../../services/screen-size/screen-size.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MeFirstComponent } from './components/me-first/me-first.component';
import { PhotoCollageComponent } from './components/photo-collage/photo-collage.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { FirebaseImagesService } from '../../services/firebase/firebase-images.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ImageContainerComponent,
    CardSectionComponent,
    MainFooterComponent,
    AngularFireModule,
    AsyncPipe,
    MeFirstComponent,
    PhotoCollageComponent,
    ProgressSpinnerModule,
    SpinnerComponent,
    CommonModule,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  public imageData: ImageData[];

  readonly isScreenSizeMobile$ = this._screenSizeService.isScreenSizeMobile$;
  readonly isScreenSizeTabletOrMobile$ =
    this._screenSizeService.isScreenSizeTabletOrMobile$;

  constructor(
    private readonly firebaseImagesService: FirebaseImagesService,
    private readonly _screenSizeService: ScreenSizeService,
  ) {}

  public async ngOnInit() {
    // this.getFiles();
  }

  public async getFiles() {
    // await this.firebaseImagesService.getLandingPageImages().then((images) => {
    //   this.imageData = images.map((img) => ({ ...img, loaded: false }));
    // });
  }

  public getImageUrl(name: string): string | undefined {
    return this.imageData?.find((img) => img.name === name)?.url;
  }

  public onImageLoad(imageUrl: string) {}
}
