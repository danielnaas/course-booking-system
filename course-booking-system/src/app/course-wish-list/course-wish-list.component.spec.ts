import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseWishListComponent } from './course-wish-list.component';

describe('CourseWishListComponent', () => {
  let component: CourseWishListComponent;
  let fixture: ComponentFixture<CourseWishListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseWishListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseWishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
