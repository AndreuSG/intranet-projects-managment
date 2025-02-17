import { Studies } from "../enums/studies.enum";
import { Attachment } from "./attachment.interface";

export interface Project {
  id: number | null;
  title: string;
  category: Studies;
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
