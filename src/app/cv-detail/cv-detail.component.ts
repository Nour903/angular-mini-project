import { Component, Input } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  imports: [],
  selector: 'app-cv-detail',
  styleUrl: './cv-detail.component.css',
  templateUrl: './cv-detail.component.html',
})
export class CvDetailComponent {
  @Input() cv: Cv | null = null;
}
