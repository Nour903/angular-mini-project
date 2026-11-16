import { Component, signal } from '@angular/core';
import { CvComponent } from './cv/cv.component';

@Component({
  imports: [CvComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('cvtech');
}
