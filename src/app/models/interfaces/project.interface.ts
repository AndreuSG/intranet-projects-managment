import { Course } from "../enums/course.enum";
import { Attachment } from "./attachment.interface";

export interface Project {
  id: number | null;
  title: string;
  category: Course;
  creator: string;
}

export interface ProjectDetail extends Project {
  description: string;
  creationDate: Date;
  lastUpdated: Date | null;
  beginDate: Date;
  endDate: Date;
  attachments: Attachment[];
}
