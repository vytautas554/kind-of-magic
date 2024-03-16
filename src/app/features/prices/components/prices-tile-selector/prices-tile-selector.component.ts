import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { ScreenSizeService } from '../../../../services/screen-size/screen-size.service';
import { PlanInfo } from '../../prices.type';
import { PriceTileMobileComponent } from '../price-tile-mobile/price-tile-mobile.component';
import { PricesTileComponent } from '../prices-tile/prices-tile.component';

@Component({
  selector: 'app-prices-tile-selector',
  standalone: true,
  imports: [CommonModule, PricesTileComponent, PriceTileMobileComponent],
  templateUrl: './prices-tile-selector.component.html',
  styleUrl: './prices-tile-selector.component.scss',
})
export class PricesTileSelectorComponent {
  @Input() planInfo: PlanInfo[];

  readonly isScreenSizeDesktop$ = this._screenSizeService.isScreenSizeDesktop$;

  constructor(private readonly _screenSizeService: ScreenSizeService) {}
}
