import { Study } from "../enums/study.enum";

export interface Module {
  idmodul: number;
  idcurriculum: number;
  curriculum: string;
  estudis: Study;
  sigles: string;
  nom: string;
}

export interface SelectedModule {
  idmodul: number;
  idcurriculum: number;
}