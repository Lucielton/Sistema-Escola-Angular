import { AlunoUpdateComponent } from './aluno-module/components/aluno-update/aluno-update.component';
import { AlunoCreateComponent } from './aluno-module/components/aluno-create/aluno-create.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursoCreateComponent } from './curso-module/components/curso-create/curso-create.component';
import { CursoReadComponent } from './curso-module/components/curso-read/curso-read.component';
import { CursoUpdateComponent } from './curso-module/components/curso-update/curso-update.component';

import { MatriculaReadComponent } from './matricula-module/components/matricula-read/matricula-read.component';
import { AlunoReadComponent } from './aluno-module/components/aluno-read/aluno-read.component';


const routes: Routes = [  
  {path: '', component: CursoReadComponent},
  {path: 'create', component: CursoCreateComponent},
  {path: 'update/:id', component: CursoUpdateComponent},

  {path:'alunos', component: AlunoReadComponent},
  {path:'alunos/create', component: AlunoCreateComponent},
  {path:'alunos/update/:id', component: AlunoUpdateComponent},

  {path:'matricula', component: MatriculaReadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
