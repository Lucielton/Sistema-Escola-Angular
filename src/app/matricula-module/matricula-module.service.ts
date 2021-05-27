import { Matricula } from './matricula';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MatriculaModuleService {

  baseUrl: string = 
    "https://api.allorigins.win/get?url=https://stormy-badlands-29216.herokuapp.com/api/matricula/";

  constructor(private http: HttpClient) { }

  create(matricula: Matricula): Observable<Matricula>{
    const url = this.baseUrl + "incluir/";
    return this.http.post<Matricula>(url, matricula).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  read(): Observable<Matricula[]>{
    const url = this.baseUrl + "consultar/";
    return this.http.get<Matricula>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }
  
  readByName(matriculaName: string){
    const url = this.baseUrl + "consultar/" + matriculaName;
    if(matriculaName !== undefined || matriculaName !== ""){
      return this.http.get<Matricula>(url).pipe(
        map(obj => obj),
        catchError(e => this.errorHandler(e))
      );
    }else{
      this.read();
    }
  }
  
  update(matricula: Matricula){
    const url = this.baseUrl + 'alterarparcial/';
    return this.http.patch<Matricula>(url, matricula).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  delete(matricula: Matricula){
    const url = this.baseUrl + 'remover/' + matricula;
    return this.http.delete(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any>{
    console.log(e);
    return EMPTY;
  }

  formatData(data: any){
    return JSON.parse(data);
  }
}
