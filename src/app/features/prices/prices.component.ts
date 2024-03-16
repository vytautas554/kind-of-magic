import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricesTileSelectorComponent } from './components/prices-tile-selector/prices-tile-selector.component';
import { PLAN_INFO } from './prices.const';

@Component({
  selector: 'app-prices',
  standalone: true,
  imports: [CommonModule, PricesTileSelectorComponent],
  templateUrl: './prices.component.html',
  styleUrl: './prices.component.scss',
})
export class PricesComponent {
  planInfo = PLAN_INFO;
}
