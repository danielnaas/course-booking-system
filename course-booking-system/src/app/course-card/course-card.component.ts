import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../models/course.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-card',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input() course?: Course;
  @Output() courseBooked = new EventEmitter<any>();
  @Output() wishlistAdded = new EventEmitter<any>();

// I have to import router before I can use it below
constructor(private router: Router) {}

  onCourseBooked(): void {
    this.courseBooked.emit(this.course);
  }

  onAddToWishlist(): void {
    this.wishlistAdded.emit(this.course);
  }

  goToDetails(courseId: number) {
    // this moves to the other component
    this.router.navigate(['/courses', courseId])
  }
}
