import { Inject, Injectable } from '@angular/core';

import { BehaviorSubject, distinctUntilChanged, fromEvent, map } from 'rxjs';

import { MIN_LG_WIDTH, MIN_MD_WIDTH } from './screen-size.const';
import { ScreenSize } from './screen-size.type';
import { WINDOW } from '../../const/window-injection-token';

@Injectable({ providedIn: 'root' })
export class ScreenSizeService {
  readonly rawScreenSize$ = new BehaviorSubject<number>(
    this._window.innerWidth,
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

  constructor(@Inject(WINDOW) private readonly _window: Window) {
    this._initListener();
  }

  get screenSize(): ScreenSize {
    const width = this._window.innerWidth;

    if (width < MIN_MD_WIDTH) {
      return ScreenSize.mobile;
    } else if (width < MIN_LG_WIDTH) {
      return ScreenSize.tablet;
    } else {
      return ScreenSize.desktop;
    }
  }

  private _initListener(): void {
    fromEvent(this._window, 'resize').subscribe(() =>
      this.rawScreenSize$.next(this._window.innerWidth),
    );
  }
}
