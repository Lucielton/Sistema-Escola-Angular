import { CursoServiceService } from './../../curso-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from '../../curso.model';

@Component({
  selector: 'app-curso-create',
  templateUrl: './curso-create.component.html',
  styleUrls: ['./curso-create.component.css']
})
export class CursoCreateComponent implements OnInit {

  cursoQuantidade: number;

  curso: Curso={
    codigo: null,
    nome: "",
    instrutor: "",
    local: "",
    cargaHoraria: null,
    dataInicio: null

  };

  constructor(
    private router: Router,
    private cursoServiceService: CursoServiceService
  ) { }

  ngOnInit(): void {
    this.cursoServiceService.read().subscribe(cursos => {
      const coursesQuantity = JSON.parse(cursos['contents']);
      this.cursoQuantidade = coursesQuantity.length;
    });
  }

  criarCurso(){
    this.curso.codigo = this.cursoQuantidade+1;
    console.log(this.curso);

    this.cursoServiceService.create(this.curso);

    alert('Curso criado');
  }

  navigateToHome(){
    this.router.navigate(['']);
  }

}
