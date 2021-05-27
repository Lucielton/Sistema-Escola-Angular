import { AlunoModuleService } from './../../aluno-module.service';
import { Component, OnInit, ViewChild } from '@angular/core';

import { Aluno } from '../../aluno.model';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Router } from '@angular/router';

@Component({
  selector: 'app-aluno-read',
  templateUrl: './aluno-read.component.html',
  styleUrls: ['./aluno-read.component.css']
})
export class AlunoReadComponent implements OnInit {

  selectedAlunoID: string;

  alunos: Aluno[];
  dataSource = new MatTableDataSource<Aluno>();

  displayedColumns: string[] = [
    'codigo', 
    'nome', 
    'dataNascimento', 
    'selecionar'
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private alunoModuleService: AlunoModuleService,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.alunoModuleService.read().subscribe(alunos => {
      this.alunos = JSON.parse(alunos['contents']);
      this.dataSource = new MatTableDataSource(this.alunos);
      setTimeout(() => this.dataSource.paginator = this.paginator);
    });
  }

  navigateToCreate(): void{
    this.router.navigate(['/alunos/create']);
  }

  navigateToUpdate(): void{
    this.router.navigate([`/alunos/update/${this.selectedAlunoID}`]);
  }

  selectElement(alunoName: string): void{
    this.selectedAlunoID = alunoName;
  }

  searchAluno(alunoName: string): void{
    this.alunoModuleService.readByName(alunoName).subscribe(
      aluno => {
        this.alunos = JSON.parse(aluno['contents']);
        this.dataSource = new MatTableDataSource(this.alunos);
        setTimeout(() => this.dataSource.paginator = this.paginator);
      }
    )
  }
}
