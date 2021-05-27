import { Curso } from '../curso-module/curso.model';
import { Aluno } from './../aluno-module/aluno.model';

export interface Matricula{
  codigo?: number;
  aluno: Aluno;
  listaMatriculaCurso: Curso[];
}