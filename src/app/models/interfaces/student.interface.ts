import { Course } from "../enums/course.enum";

export interface Student {
  idalu: number;
  name: string;
  surname: string;
  course: Course;
  email: string;
}
