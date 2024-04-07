import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanInfo } from '../../prices.type';

@Component({
  selector: 'app-prices-tile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prices-tile.component.html',
  styleUrl: './prices-tile.component.scss',
})
export class PricesTileComponent {
  @Input() planInfo: PlanInfo;
}
