import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Cv} from '../model/cv';

@Component({
  imports: [],
  selector: 'app-cv-list',
  styleUrl: './cv-list.component.css',
  templateUrl: './cv-list.component.html',
})

export class CvListComponent {
  @Input() cvs: Cv[] = [];
  @Output() selectCv = new EventEmitter<Cv>();

  @Input() selectedCv: Cv | null = null; 

  onSelect(cv: Cv): void {
    this.selectCv.emit(cv);
  }
}
