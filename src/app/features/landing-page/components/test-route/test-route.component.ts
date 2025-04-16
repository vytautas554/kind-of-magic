import { Component } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ImageData } from '../../landing-page.type';
import { FirebaseImagesService } from '../../../../services/firebase/firebase-images.service';
import { ScreenSizeService } from '../../../../services/screen-size/screen-size.service';

@Component({
  selector: 'app-test-route',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  templateUrl: './test-route.component.html',
  styleUrl: './test-route.component.scss',
})
export class TestRouteComponent {
  public imageData: ImageData[];

  readonly isScreenSizeMobile$ = this._screenSizeService.isScreenSizeMobile$;
  readonly isScreenSizeTabletOrMobile$ =
    this._screenSizeService.isScreenSizeTabletOrMobile$;

  constructor(
    private readonly firebaseImagesService: FirebaseImagesService,
    private readonly _screenSizeService: ScreenSizeService,
  ) {}

  public async ngOnInit() {
    this.getFiles();
  }

  async getFiles() {
    await this.firebaseImagesService.getLandingPageImages().then((images) => {
      this.imageData = images;
      console.log('urls', images);
    });
  }

  getImageUrl(name: string): string | undefined {
    return this.imageData?.find((img) => img.name === name)?.url;
  }
}
