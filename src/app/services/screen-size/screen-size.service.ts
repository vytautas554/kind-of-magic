import { Inject, Injectable } from '@angular/core';

import { BehaviorSubject, distinctUntilChanged, fromEvent, map } from 'rxjs';

import { MIN_LG_WIDTH, MIN_MD_WIDTH } from './screen-size.const';
import { ScreenSize } from './screen-size.type';
import { WINDOW } from '../../constants/window-injection-token';

@Injectable({ providedIn: 'root' })
export class ScreenSizeService {
  readonly rawScreenSize$ = new BehaviorSubject<number>(
    this._window?.innerWidth ?? 0,
  );

  readonly screenSize$ = this.rawScreenSize$.pipe(
    map(() => this.screenSize),
    distinctUntilChanged(),
  );

  readonly isScreenSizeMobile$ = this.screenSize$.pipe(
    map((size) => size === ScreenSize.mobile),
  );

  readonly isScreenSizeTabletOrMobile$ = this.screenSize$.pipe(
    map((size) => size === ScreenSize.tablet || size === ScreenSize.mobile),
  );

  readonly isScreenSizeDesktop$ = this.screenSize$.pipe(
    map((size) => size === ScreenSize.desktop),
  );

  constructor(@Inject(WINDOW) private readonly _window: Window | null) {
    if (this._window) {
      this._initListener();
      this.rawScreenSize$.next(this._window.innerWidth);
    }
  }

  get screenSize(): ScreenSize {
    const width = this._window?.innerWidth ?? 0;

    if (width < MIN_MD_WIDTH) {
      return ScreenSize.mobile;
    } else if (width < MIN_LG_WIDTH) {
      return ScreenSize.tablet;
    } else {
      return ScreenSize.desktop;
    }
  }

  private _initListener(): void {
    if (this._window) {
      fromEvent(this._window, 'resize').subscribe(() =>
        this.rawScreenSize$.next(this._window?.innerWidth ?? 0),
      );
    }
  }
}
