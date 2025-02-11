import { Course } from "../enums/course.enum";

export interface Student {
  name: string;
  course: Course;
  email: string;
}
