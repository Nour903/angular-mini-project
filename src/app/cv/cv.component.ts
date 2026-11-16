import { Component } from '@angular/core';
import { CvListComponent } from '../cv-list/cv-list.component';
import { CvDetailComponent } from '../cv-detail/cv-detail.component';
import { Cv } from '../model/cv';

@Component({
  imports: [CvListComponent, CvDetailComponent],
  selector: 'app-cv',
  styleUrl: './cv.component.css',
  templateUrl: './cv.component.html',
})

export class CvComponent {
  cvs: Cv[] = [
    new Cv(1, 'Nour', 'Smadhi', 23, '01234567', 'Chef', 'avatars/a1.png'),
    new Cv(2, 'Nour', 'Besrour', 22, '07654321', 'Étudiante', 'avatars/a2.png'),
    new Cv(3, 'Amal', 'Torjmane', 22, '09876543', 'Développeuse', 'avatars/a3.png'),
    new Cv(4, 'Louay', 'Abdelkader', 23, '12345678', 'Designer', 'avatars/a4.png'),
    new Cv(5, 'Baya', 'Bouzouita', 30, '02340145', 'Enseignante', 'avatars/a5.png'),
  ];

  selectedCv: Cv | null = null;

  onSelectCv(cv: Cv): void {
    this.selectedCv = cv;
  }
}