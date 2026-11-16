import { Component, input, output } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  imports: [],
  selector: 'app-cv-item',
  styleUrl: './cv-item.component.css',
  templateUrl: './cv-item.component.html',
})
export class CvItemComponent {
  cv = input.required<Cv>();
  selectCv = output<Cv>();

  onClick(): void {
    this.selectCv.emit(this.cv());
  }
}
