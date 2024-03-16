import { Component } from '@angular/core';
import { PricesTileComponent } from '../prices-tile/prices-tile.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-price-tile-mobile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './price-tile-mobile.component.html',
  styleUrl: './price-tile-mobile.component.scss',
})
export class PriceTileMobileComponent extends PricesTileComponent {}
