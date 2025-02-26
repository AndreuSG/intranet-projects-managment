import { Study } from "../enums/study.enum";
import { Attachment } from "./attachment.interface";

export interface ProjectList {
  centre: Project[];
  alumne: Project[];  
}

export interface Project {
  id?: number;
  titol: string;
  creatPer: number;
  estudi: Study;
  attachments?: Attachment[];
}

export interface ProjectDetail extends Project {
  descripcio: string;
  creationDate: Date;
  lastUpdated: Date | null;
  startDate: Date;
  endDate: Date;
}

export interface StudentProject extends ProjectDetail {
  alumnesIds: number[];
}


