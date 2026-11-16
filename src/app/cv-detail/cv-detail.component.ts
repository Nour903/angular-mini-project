import { Component, input } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  imports: [],
  selector: 'app-cv-detail',
  styleUrl: './cv-detail.component.css',
  templateUrl: './cv-detail.component.html',
})
export class CvDetailComponent {
  cv = input<Cv | null>(null);
}
