import { Aluno } from './../../aluno.model';
import { AlunoModuleService } from './../../aluno-module.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aluno-create',
  templateUrl: './aluno-create.component.html',
  styleUrls: ['./aluno-create.component.css']
})
export class AlunoCreateComponent implements OnInit {

  aluno: Aluno ={
    nome: '',
    dataNascimento: null,
  }

  constructor(
    private router: Router,
    private alunoModuleService: AlunoModuleService
  ) { }

  ngOnInit(): void {
  }

  createAluno(){
    this.alunoModuleService.create(this.aluno).subscribe(
      data => console.log(data)
    )
  }

  navigateToAlunoHome(): void{
    this.router.navigate(['/alunos']);
  }

}
