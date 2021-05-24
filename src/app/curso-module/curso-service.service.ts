import { Curso } from './curso.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CursoServiceService {

  baseUrl: string = 
    "https://api.allorigins.win/get?url=https://stormy-badlands-29216.herokuapp.com/api/curso/";

  constructor(private http: HttpClient) { }

  create(curso: Curso): Observable<Curso>{
    const url = this.baseUrl + "incluir/";
    return this.http.post<Curso>(url, curso).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  read(): Observable<Curso[]>{
    const url = this.baseUrl + "consultar/";
    return this.http.get<Curso>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }
  
  readByName(courseName: string){
    const url = this.baseUrl + "consultar/" + courseName;
    if(courseName !== undefined || courseName !== ""){
      return this.http.get<Curso>(url).pipe(
        map(obj => obj),
        catchError(e => this.errorHandler(e))
      );
    }else{
      this.read();
    }
  }
  
  update(curso: Curso){
    const url = this.baseUrl + 'alterarparcial/';
    return this.http.patch<Curso>(url, curso).pipe(
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
