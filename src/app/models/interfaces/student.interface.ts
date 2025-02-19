import { Study } from "../enums/study.enum";

export interface Student {
  idalu: string;
  nom_complet: string;
  email: string;
  estudis: Study;
}
