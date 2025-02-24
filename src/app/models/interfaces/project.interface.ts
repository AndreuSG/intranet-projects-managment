import { Study } from "../enums/study.enum";
import { Attachment } from "./attachment.interface";

export interface Project {
  id?: number;
  title: string;
  study: Study;
  creator: string;
}

export interface ProjectDetail extends Project {
  description: string;
  creationDate: Date;
  lastUpdated: Date | null;
  startDate: Date;
  endDate: Date;
  attachments: Attachment[];
}

export interface SchoolProject extends Project {
  createdBy: string;
}
