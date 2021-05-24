import { CursoServiceService } from './../../curso-service.service';
import { Curso } from './../../curso.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-curso-update',
  templateUrl: './curso-update.component.html',
  styleUrls: ['./curso-update.component.css']
})
export class CursoUpdateComponent implements OnInit {

  curso: Curso ={
    nome: '',
    local: '',
    cargaHoraria: null,
    dataInicio: null,
    instrutor: '',
    codigo: null
  };

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private cursoServiceService: CursoServiceService
  ) { }

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('id');
    this.cursoServiceService.readByName(name).subscribe(curso => {
      this.curso = JSON.parse(curso["contents"]);
      this.curso = this.curso[0];
    });
  }

  updateCourse(): void{
    this.cursoServiceService.update(this.curso).subscribe(()=>{
      alert("Alteração feita com sucesso");
      this.router.navigate(['']);
    })
  }

  navigateToHome(){
    this.router.navigate(['']);
  }

}
