import { Component, HostListener, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CommonButtonComponent } from '../../../../components/common-button/common-button.component';
import { ImageModule } from 'primeng/image';
import { CommonModule } from '@angular/common';
import { CardSectionData } from '../../landing-page.type';

@Component({
  selector: 'app-card-section',
  standalone: true,
  imports: [CardModule, ImageModule, CommonModule, CommonButtonComponent],
  templateUrl: './card-section.component.html',
  styleUrl: './card-section.component.scss',
})
export class CardSectionComponent {
  @Input() public showImg = true;
  @Input() public cardSectionData: CardSectionData[];

  public innerWidth: number;

  @HostListener('window:resize', ['$event'])
  public onWindowResize(event: any): void {
    this.innerWidth = event.target.innerWidth;
  }
}
