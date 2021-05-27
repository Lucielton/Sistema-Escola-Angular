import { Aluno } from './../../aluno.model';
import { AlunoModuleService } from './../../aluno-module.service';
import { CursoServiceService } from './../../../curso-module/curso-service.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aluno-update',
  templateUrl: './aluno-update.component.html',
  styleUrls: ['./aluno-update.component.css']
})
export class AlunoUpdateComponent implements OnInit {

  aluno: Aluno = {
    dataNascimento: new Date(),
    nome: ""
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alunoModuleService: AlunoModuleService
  ) { }

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('id');
    this.alunoModuleService.readByName(name).subscribe(
      data =>{ 
        this.aluno = JSON.parse(data.contents)[0]
        console.log(this.aluno)
      }
    )
  }

  updateCourse(){
    this.alunoModuleService.update(this.aluno).subscribe(
      data => data.status
    )
  }

  navigateToHome(){
    this.router.navigate(['/alunos']);
  }
}
