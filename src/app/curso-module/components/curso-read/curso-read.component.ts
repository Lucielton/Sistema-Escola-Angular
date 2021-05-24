import { CursoServiceService } from './../../curso-service.service';
import { Curso } from './../../curso.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-curso-read',
  templateUrl: './curso-read.component.html',
  styleUrls: ['./curso-read.component.css']
})

export class CursoReadComponent implements OnInit {

  selectedElementID: string;

  courses: Curso[];
  dataSource = new MatTableDataSource<Curso>();

  displayedColumns: string[] = [
    'codigo', 
    'nome', 
    'instrutor', 
    'local', 
    'cargaHoraria', 
    'dataInicio',
    'selecionar'
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private router: Router, 
    private cursoServiceService: CursoServiceService
  ) { }

  ngOnInit(): void {

    this.cursoServiceService.read().subscribe(cursos => {
      this.courses = JSON.parse(cursos['contents']);
      this.dataSource = new MatTableDataSource(this.courses);
    });

    setTimeout(() => this.dataSource.paginator = this.paginator);
  }

  navigateToInclude(){
    this.router.navigate(['/create']);
  }

  navigateToUpdate(name: string){
    this.router.navigate([`/update/${name}`]);
    this.cursoServiceService.readByName(name).subscribe(curso =>{
      console.log(JSON.parse(curso['contents']));
    });
  }

  selectElement(selectedElementName: string): void{
    this.selectedElementID = selectedElementName;
    console.log(selectedElementName);
  }

  searchCourse(courseName: string){
    this.cursoServiceService.readByName(courseName).subscribe(cursos => {
      this.courses = JSON.parse(cursos['contents']);
      this.dataSource = new MatTableDataSource(this.courses);
      console.log(this.dataSource);
    });
  }

  deleteElement(){
    this.cursoServiceService.delete(this.selectedElementID);
    alert("Curso deletado");
  }

}
