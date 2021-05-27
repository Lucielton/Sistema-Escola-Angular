import { MatriculaModuleService } from './../../matricula-module.service';
import { Component, OnInit } from '@angular/core';
import { Matricula } from '../../matricula';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matricula-read',
  templateUrl: './matricula-read.component.html',
  styleUrls: ['./matricula-read.component.css']
})
export class MatriculaReadComponent implements OnInit {

  matriculas: Matricula[];
  dataSource = new MatTableDataSource<Matricula>();
  displayedColumns: string[] = [
    "codigo", 
    "nome", 
    "cursos"
  ];

  constructor(
    private matriculaModuleService: MatriculaModuleService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.matriculaModuleService.read().subscribe(
      data =>{
         this.matriculas = <Matricula[]>JSON.parse(data["contents"])
         this.dataSource = new MatTableDataSource(this.matriculas);
         console.log(this.dataSource);
      }
    )
  }

  backToCourses(){
    this.router.navigate(['']);
  }
}
