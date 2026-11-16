import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CvItemComponent } from './cv-item.component';
import { Cv } from '../model/cv';

describe('CvItemComponent', () => {
  let component: CvItemComponent;
  let fixture: ComponentFixture<CvItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CvItemComponent);
    fixture.componentRef.setInput('cv', new Cv(1, 'Test', 'User', 30, '00000000', 'Dev', 'avatars/a1.png'));
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
