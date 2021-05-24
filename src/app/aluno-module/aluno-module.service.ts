import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Aluno } from './aluno.model';

@Injectable({
  providedIn: 'root'
})
export class AlunoModuleService {
  baseUrl: string = 
    "https://api.allorigins.win/get?url=https://stormy-badlands-29216.herokuapp.com/api/aluno/";

  constructor(private http: HttpClient) { }

  create(aluno: Aluno): Observable<Aluno>{
    const url = this.baseUrl + "incluir/"
    return this.http.post<Aluno>(url, aluno).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  read(): Observable<Aluno[]>{
    const url = this.baseUrl + "consultar/";
    return this.http.get<Aluno>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }
  
  readByName(alunoName: string){
    const url = this.baseUrl + "consultar/" + alunoName;
    if(alunoName !== undefined || alunoName !== ""){
      return this.http.get<Aluno>(url).pipe(
        map(obj => obj),
        catchError(e => this.errorHandler(e))
      );
    }else{
      this.read();
    }
  }
  
  update(aluno: Aluno){
    const url = this.baseUrl + 'alterarparcial/';
    return this.http.patch<Aluno>(url, aluno).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  delete(cursoName: string){
    const url = this.baseUrl + 'remover/';
    const curso = this.readByName(cursoName);
    return this.http.post(url, curso);
  }

  errorHandler(e: any): Observable<any>{
    console.log(e);
    return EMPTY;
  }

  formatData(data: any){
    return JSON.parse(data);
  }
}
