import { Studies } from "../enums/studies.enum";

export interface Module {
  idmodul: number;
  idcurriculum: number;
  curriculum: string;
  estudis: Studies;
  sigles: string;
  nom: string;
}

export interface SelectedModule {
  idmodul: number;
  idcurriculum: number;
}