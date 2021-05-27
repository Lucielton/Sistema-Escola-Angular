import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunoReadComponent } from './components/aluno-read/aluno-read.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AlunoCreateComponent } from './components/aluno-create/aluno-create.component';
import { AlunoUpdateComponent } from './components/aluno-update/aluno-update.component';


@NgModule({
  declarations: [
    AlunoReadComponent,
    AlunoCreateComponent,
    AlunoUpdateComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatPaginatorModule,
    FormsModule,
  ]
})
export class AlunoModuleModule { }
