import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { CursoReadComponent } from './components/curso-read/curso-read.component';
import { CursoUpdateComponent } from './components/curso-update/curso-update.component';
import { CursoCreateComponent } from './components/curso-create/curso-create.component';
import { CursoDeleteComponent } from './components/curso-delete/curso-delete.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatPaginatorModule } from '@angular/material/paginator';

import { FormsModule }   from '@angular/forms';


@NgModule({
  declarations: [
    CursoReadComponent,
    CursoUpdateComponent,
    CursoCreateComponent,
    CursoDeleteComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatPaginatorModule,
  ]
})
export class CursoModuleModule { }
