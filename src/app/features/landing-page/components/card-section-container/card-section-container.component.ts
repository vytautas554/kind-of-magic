import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CommonButtonComponent } from '../../../../components/common-button/common-button.component';
import { ImageModule } from 'primeng/image';
import { CommonModule } from '@angular/common';
import { CardSectionData } from '../../models/landing-page.model';

@Component({
  selector: 'app-card-section-container',
  standalone: true,
  imports: [CardModule, ImageModule, CommonModule, CommonButtonComponent],
  templateUrl: './card-section-container.component.html',
  styleUrl: './card-section-container.component.scss',
})
export class CardSectionContainerComponent {
  @Input() public showImg = true;
  @Input() public cardSectionData: CardSectionData[];
}
