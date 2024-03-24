import { Component } from '@angular/core';
import { AboutMe } from './about-me.type';
import { AboutMeInfo } from './about-me.const';
import { CommonModule } from '@angular/common';
import { ScreenSizeService } from '../../services/screen-size/screen-size.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  public aboutMeInfo: AboutMe[] = AboutMeInfo;

  readonly isScreenSizeTabletOrMobile$ =
    this._screenSizeService.isScreenSizeTabletOrMobile$;

  constructor(private readonly _screenSizeService: ScreenSizeService) {}
}
