import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { DukInfo } from './duk.type';
import { DUK_INFO } from './duk.const';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-duk',
  standalone: true,
  imports: [AccordionModule, CommonModule],
  templateUrl: './duk.component.html',
  styleUrl: './duk.component.scss',
})
export class DukComponent {
  protected dukInfo: DukInfo[] = DUK_INFO;
}
