import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-wish-list',
  imports: [],
  templateUrl: './course-wish-list.component.html',
  styleUrl: './course-wish-list.component.css'
})
export class CourseWishListComponent {
    @Input() course: any;
}
