import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course.model';
import { CourseService } from '../services/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  imports: [CommonModule],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css'
})
export class CourseDetailComponent implements OnInit{
  course: Course | null = null;
  // I had to add that private:route bit after adding the route subscription
  constructor(private courseService: CourseService, private route:ActivatedRoute ){}

  ngOnInit(): void {
    // watching for route parameters
    this.route.paramMap.subscribe(params => {
      const idStr = params.get('id');
      if(idStr) {
        // the plus sign attempts to turn the value into a number if it isn't already
        const id = +idStr;
        this.loadCourseById(id);
      }
    })
  }

  loadCourseById(id: number): void {
    this.courseService.getCourseById(id).subscribe({
      next: (data: Course) => {
        this.course = data;
      },
      error: (err) => {
        console.error('Error fetching course by ID:', err);
      }
    })
  }

}