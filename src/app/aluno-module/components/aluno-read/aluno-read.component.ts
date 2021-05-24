import { AlunoModuleService } from './../../aluno-module.service';
import { Component, OnInit, ViewChild } from '@angular/core';

import { Aluno } from '../../aluno.model';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

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
    private alunoModuleService: AlunoModuleService
  ) { }

  ngOnInit(): void {

    this.alunoModuleService.read().subscribe(alunos => {
      this.alunos = JSON.parse(alunos['contents']);
      this.dataSource = new MatTableDataSource(this.alunos);
    });

    setTimeout(() => this.dataSource.paginator = this.paginator);

  }

}
